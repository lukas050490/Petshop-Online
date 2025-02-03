import { useLocation } from "react-router-dom"
import stripePromise from "../../config/stripeConfig"
import CheckoutForm from "../../components/Stripe/CheckoutForm"
import { Elements } from "@stripe/react-stripe-js"

function Checkout() {
    const {
        state: {clientSecret},
    } = useLocation()

    if (!clientSecret) {
        return <div>Erro, tente novamente</div>
    }

    return (
        <Elements stripe={stripePromise} options={{clientSecret}}>
          <CheckoutForm/>
        </Elements>
    )
}

export default Checkout