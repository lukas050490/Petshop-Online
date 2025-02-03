import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
    "pk_test_51QhFg4CHEkKBXRMNfDTkm67BzAtbNCFWrxVJ5bx24Y2zOnMcwNe0sNbZDubvwNObMyZnbyB2jdehdWFFvuvIFB2K00rQkEqXbO"
)

export default stripePromise;