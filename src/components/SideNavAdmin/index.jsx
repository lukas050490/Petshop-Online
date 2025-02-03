import {Container, NavContainer, NavLink, Footer} from "./styles"
import { navLinks } from "./navLinks"
import Logo from "../../assets/logopetshop.png"
import { SignOut } from "@phosphor-icons/react"
import {useUser} from "../../hooks/UserContext"
import { useResolvedPath } from "react-router-dom"


function SideNavAdmin() {
    const {logout} = useUser();
    const { pathname} = useResolvedPath();

    return (
        <Container>
            <img src={Logo} alt="imagem logo"/>
            <NavContainer>
                {navLinks.map(link => (
                    <NavLink 
                      key={link.id}
                      to={link.path}
                      $isActive={pathname === link.path}
                    >
                      {link.icon}
                      <span>{link.label}</span>
                    </NavLink>
                ))}
            </NavContainer>
            <Footer>
                <NavLink to="/login" onClick={logout}>
                    <SignOut/>
                    <span>Sair</span>
                </NavLink>
            </Footer>

        </Container>
    )
}

export default SideNavAdmin