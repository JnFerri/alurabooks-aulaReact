import sacola from "../../../images/sacola.svg"
import perfil from "../../../images/perfil.svg"
import style from "./NavBarIcons.css"

const icones = [sacola, perfil]

function NavBarIcons(){
    return(
        <ul className='NavBar__icones'>
                {icones.map(icone => (
                    <li className='NavBar__icone'><img src={icone}></img></li>
                ))}
            </ul>
    )
}

export default NavBarIcons