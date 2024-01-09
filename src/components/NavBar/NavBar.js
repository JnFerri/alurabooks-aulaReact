import NavBarOptions from "./NavBarOptions/NavBarOptions";
import NavBarIcons from "./NavBarIcons/NavBarIcons";


function NavBar(){
    return(
        <nav className="NavBar">
            <NavBarOptions></NavBarOptions>
            <NavBarIcons></NavBarIcons>
        </nav>
        

    )
}

export default NavBar