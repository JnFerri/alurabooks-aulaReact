import style from  './NavBarOptions.css'


const opcoes = ['Categorias', 'Minha Estante', 'Favoritos']

function NavBarOptions(){
    return(
        
        <ul className="NavBar__opcoes">
            {opcoes.map(opcao => (
                <li className="NavBar__opcao"><p>{opcao}</p></li>
            ))}
        </ul>
        
    
        )
}

export default NavBarOptions