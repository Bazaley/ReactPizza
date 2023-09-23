import { HandySvg } from "handy-svg"
import logo from '../../images/logo.svg'
import { LogoBox,LogoName,LogoDescription,Box } from "./Logo.styled"

const Logo = () => {
    return (
        <LogoBox>
            <HandySvg
                src={logo}
                width='38'
                height='38'
            />
            <Box>
                <LogoName>REACT PIZZA</LogoName>
                <LogoDescription>самая вкусная пицца во вселенной</LogoDescription>
            </Box>
        </LogoBox>
    )
}

export default Logo