import { Container, ContainerItems, ContainerPrice, } from "./styles"
import CardButton from "../CardButton"
import { useCart } from "../../hooks/CartContext"
import { useNavigate } from "react-router-dom"

export function CardProducts({ product }) {
    const { putProductInCart } = useCart()

    const navigate = useNavigate()
    

    const handleAddToCart = () => {
        putProductInCart(product);
        navigate('/carrinho'); 
      };


    return (
        <Container>
            <ContainerItems key={product.id} imageurl={product.url}>
            </ContainerItems>
            <ContainerPrice>
                <p>{product.name}</p>
                <strong>{product.currencyValue}</strong>
                <CardButton onClick={handleAddToCart}/>
            </ContainerPrice>
        </Container>
    )
}

//onClick={() => putProductInCart(product)}