import React from 'react';
import { NavLink } from 'react-router-dom';
import { LangContext } from './../../context/lang-context';

import logo from './logo192.png';

function FooterNavbar() {
    return (
        <LangContext.Consumer>
            {(value) => {
                return (
                    //the img element in the "Home (/)" link needs a proper picture.
                    <div>
                        {value.properties.language === "catalan" && <NavLink to="/info">Informació</NavLink>}
                        {value.properties.language === "spanish" && <NavLink to="/info">Información</NavLink>}
                        {value.properties.language === "english" && <NavLink to="/info">Information</NavLink>}

                        {value.properties.language === "catalan" && <NavLink to="/quiz">Joc</NavLink>}
                        {value.properties.language === "spanish" && <NavLink to="/quiz">Juego</NavLink>}
                        {value.properties.language === "english" && <NavLink to="/quiz">Game</NavLink>}

                        <NavLink to="/">
                            <img src={logo} />    
                        </NavLink>
                        
                        {value.properties.language === "catalan" && <NavLink to="/market">Mercat</NavLink>}
                        {value.properties.language === "spanish" && <NavLink to="/market">Mercado</NavLink>}
                        {value.properties.language === "english" && <NavLink to="/market">Market</NavLink>}

                        {value.properties.language === "catalan" && <NavLink to="/requests">Suggeriments</NavLink>}
                        {value.properties.language === "spanish" && <NavLink to="/requests">Sugerencias</NavLink>}
                        {value.properties.language === "english" && <NavLink to="/requests">Suggestions</NavLink>}
                    </div>
                )
            }}
        </LangContext.Consumer>
    )
}

export default FooterNavbar;