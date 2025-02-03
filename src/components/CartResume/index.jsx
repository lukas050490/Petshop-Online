import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { useCart } from "../../hooks/CartContext"
import { api } from "../../services/api"
import { formatPrice } from "../../utils/formatPrice"
import { useNavigate } from "react-router-dom"

import { Container } from "./styles"
import Button from "../../components/Button"



function CartResume() {
    const navigate = useNavigate();
    const [finalPrice, setFinalPrice] = useState(0);
    const [deliveryTax] = useState(500);

    const { cartProducts } = useCart();

    useEffect(() => {
        const sumAllItens = cartProducts.reduce((acc, current) => {
            return current.price * current.quantity + acc;
        }, 0)

        setFinalPrice(sumAllItens)
    }, [cartProducts])

    const submitOrder = async () => {
        const products = cartProducts.map((product) => {
            return { id: product.id, quantity: product.quantity, price: product.price }
        })
        

        try {
          const {data} = await api.post('create-payment-intent', {products})

          console.log("Resposta da API:", data);

          navigate('/checkout',{
            state: data,
          })
        } catch(err) {
            console.error("Erro ao criar o pagamento:", err);
            toast.error('Erro, tente novamente!',{
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            })
        }
        
    }



    return (
        <div>
            <Container>
                <div className="container-top">
                    <h2 className="title">Resumo do Pedido</h2>
                    <p className="itens">Itens</p>
                    <p className="itens-price">{formatPrice(finalPrice)}</p>
                    <p className="delivery-tax">Taxa de Entrega</p>
                    <p className="delivery-tax-price">{formatPrice(deliveryTax)}</p>
                </div>
                <div className="container-bottom">
                    <p>Total</p>
                    <p>{formatPrice(finalPrice + deliveryTax)}</p>
                </div>
            </Container>
            <Button onClick={submitOrder}>Finalizar Pedido</Button>
        </div>
    )
}

export default CartResume