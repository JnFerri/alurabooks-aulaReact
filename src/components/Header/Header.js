import Logo from "../Logo/Logo"
import NavBar from "../NavBar/NavBar"
import style from "./Header.css"

function Header(){
    return(
        <header className="header">
            <Logo/>
            <NavBar/>
        </header>
    )
}

export default Header