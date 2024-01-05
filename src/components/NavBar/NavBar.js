import style from  './NavBar.css'
import sacola from "../../images/sacola.svg"
import perfil from "../../images/perfil.svg"

const opcoes = ['Categorias', 'Minha Estante', 'Favoritos']
const icones = [sacola, perfil]
function NavBar(){
    return(
        <nav className='NavBar'>
        <ul className="NavBar__opcoes">
            {opcoes.map(opcao => (
                <li className="NavBar__opcao"><p>{opcao}</p></li>
            ))}
        </ul>
        <ul className='NavBar__icones'>
                {icones.map(icone => (
                    <li className='NavBar__icone'><img src={icone}></img></li>
                ))}
            </ul>
        </nav>
        )
}

export default NavBar