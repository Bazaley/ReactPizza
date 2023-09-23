import Logo from "components/Logo/Logo"
import BasketButton from "components/BasketButton/BasketButton"
import { Box } from "./Header.styled"

const Header = () => {
    return (
     <Box>
        <Logo/>
        <BasketButton/>
     </Box>   
    )
    }
    export default Header