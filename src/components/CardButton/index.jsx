import { ButtonContainer } from "./styles"
import { FaShoppingBasket } from "react-icons/fa"

 function CardButton({ ...props}) {

    return(
        <ButtonContainer
         {...props}>
            <FaShoppingBasket fontSize="40px"/>
        </ButtonContainer>
    )
}

export default CardButton