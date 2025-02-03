import CategoriesCarousel from "../../components/CategoriesCarousel"
import OffersCarousel from "../../components/OffersCarousel"
import { Container, ContainerUp, ContainerDown } from "./styles"
import { Link } from "react-router-dom";

function Home() {

    return (
        <Container>
            <div className="box-shadow"></div>
         <ContainerUp>
            <h1>Queremos o melhor para seu amiguinho!
                <br/>
                Para que ele tenha muitos anos de vida,
                <br/>
                feliz e saudável!
            </h1>
         </ContainerUp>
         <ContainerDown>
           <div>
            <CategoriesCarousel/>
            <OffersCarousel/>
           </div>
         </ContainerDown>
        </Container>
    )
}

export default Home