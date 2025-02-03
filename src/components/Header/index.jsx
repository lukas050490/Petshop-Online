import { useNavigate, useResolvedPath } from "react-router-dom";

import { Container, Content, Img, Navigation, HeaderLink, Options, Profile, LinkContainer, Logout } from "./styles"
import Logo from "../../assets/logopetshop.png"

import { UserCircle, ShoppingCart } from "@phosphor-icons/react";
import { useUser } from "../../hooks/UserContext";




function Header() {
  const navigate = useNavigate()
  const { logout, userInfo } = useUser()

  const { pathname } = useResolvedPath()


  function logoutUser() {
    logout()
    navigate("/login")
  }



  return (
    <Container>
      <Img src={Logo} alt="imagem-logo" />
      <Content>
        <Navigation>
          <div>
            <HeaderLink to="/" $isActive={pathname === "/"}>Home</HeaderLink>
            <HeaderLink to="/cardapio" $isActive={pathname === "/cardapio"}>Produtos</HeaderLink>
          </div>
        </Navigation>
        <Options>
          <Profile>
            <UserCircle color="#fff" size={44} />
            <div>
              <p>Olá, <span>{userInfo.name}</span></p>
              <Logout onClick={logoutUser}>Sair</Logout>
            </div>
          </Profile>
          <LinkContainer>
            <HeaderLink to="/carrinho"><ShoppingCart  color="green" size={44} /></HeaderLink> 
            <HeaderLink to="/carrinho">Carrinho</HeaderLink>
          </LinkContainer>
        </Options>
      </Content>
    </Container>
  )
}

export default Header