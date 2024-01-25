import Logo from "../Logo/Logo"
import NavBar from "../NavBar/NavBar"
import styled from "styled-components"

const HeaderContainer = styled.header`
display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    background-color: #fff;
    padding: 0 30px;
`

function Header(){
    return(
        <HeaderContainer>
            <Logo/>
            <NavBar/>
        </HeaderContainer>
    )
}

export default Header