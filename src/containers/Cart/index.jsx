import { Container, Banner, Title, Content } from "./styles"
import Logo from "../../assets/logopetshop.png"
import CartItens from "../../components/CartItens"
import CartResume from "../../components/CartResume"


function Cart() {

    return (
        <Container>
          <Banner>
            <img src={Logo} alt="foto-logo" />
          </Banner>
          <Title>Checkout - Compra</Title>
          <Content>
            <CartItens/>
            <CartResume/>
          </Content>
        </Container>
    )
}

export default Cart