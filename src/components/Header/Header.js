import Logo from "../Logo/Logo"
import NavBar from "../NavBar/NavBar"
import style from "./Header.css"
function Banner(){
    return(
        <div className="banner">
            <Logo></Logo>
            <NavBar></NavBar>
        </div>
    )
}

export default Banner