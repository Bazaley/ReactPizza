import { HandySvg } from "handy-svg"
import basketImage from '../../images/shopping-cart.svg'
import { Button,Count } from "./BasketButton.styled"


const BasketButton = () => {
    return(
        <Button type="button">
            520 ua
            <Count>      <HandySvg
                src={basketImage}
                width='18'
                height='18'
                fill='#fe5f1e'
                style={{marginRight:'8px'}}
            />
        3</Count>
      
        </Button>
    )
}

export default BasketButton