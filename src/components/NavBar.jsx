import { NavLink } from "react-router-dom";
import imgpoke from '../assets/img/poke.jpg'
const NavBar = () => {    
    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-body-tertiary d-flex justify-content-end">
                {/*<div class="navbar-brand flex-fill" href="#">Navbar</div> */}
                <NavLink
                    className={({ isActive }) => (isActive ? "active" : undefined) + "navbar-brand flex-fill"}
                    to="/">
                    <img src={imgpoke} alt="pikachu"/>
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? "active" : undefined)}
                    to="/react2-03-pokemones">
                    Home
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? "active" : undefined) + " ms-4"} 
                    to="/pokes/default">
                    Pokemones
                </NavLink>                                 
            </nav>
        </div>
    );
};
export default NavBar;
