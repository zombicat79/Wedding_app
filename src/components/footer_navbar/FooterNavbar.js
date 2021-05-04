import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from './logo192.png';

function HeaderNavbar(props) {
    return (
        //the img element in the "Home (/)" link needs a proper picture.
        <div>
            {props.lang === "catalan" && <NavLink to="/info">Informació</NavLink>}
            {props.lang === "spanish" && <NavLink to="/info">Información</NavLink>}
            {props.lang === "english" && <NavLink to="/info">Information</NavLink>}

            {props.lang === "catalan" && <NavLink to="/quiz">Joc</NavLink>}
            {props.lang === "spanish" && <NavLink to="/quiz">Juego</NavLink>}
            {props.lang === "english" && <NavLink to="/quiz">Game</NavLink>}

            <NavLink to="/">
                <img src={logo} />    
            </NavLink>
            
            {props.lang === "catalan" && <NavLink to="/market">Mercat</NavLink>}
            {props.lang === "spanish" && <NavLink to="/market">Mercado</NavLink>}
            {props.lang === "english" && <NavLink to="/market">Market</NavLink>}

            {props.lang === "catalan" && <NavLink to="/requests">Suggeriments</NavLink>}
            {props.lang === "spanish" && <NavLink to="/requests">Sugerencias</NavLink>}
            {props.lang === "english" && <NavLink to="/requests">Suggestions</NavLink>}
        </div>
    )
}

export default HeaderNavbar;