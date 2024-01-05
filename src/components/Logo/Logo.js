import logo from "../../images/logo.svg"
import style from "./Logo.css"
function Logo(){
    return (
        <div className="logo__container">
            <img src={logo} alt="Logo alura books" className="logo__img"/>
            <p className="logo__title"><strong>Alura</strong>Books</p>
        </div>
    )
}

export default Logo