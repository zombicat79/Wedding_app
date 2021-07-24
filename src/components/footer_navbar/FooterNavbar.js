import React from 'react';
import { NavLink } from 'react-router-dom';
import { LangContext } from './../../context/lang-context';

import logo from './logo192.png';

function FooterNavbar(props) {
    let navLinks = {
        info: "/info",
        quiz: "/quiz",
        market: "/market",
        requests: "/requests",
        home: "/"
    };
    
    if (props.popupIsActive === true) {
        navLinks.info = "";
        navLinks.quiz = "";
        navLinks.market = "";
        navLinks.requests = "";
        navLinks.home = "";
    }
    
    return (
        <LangContext.Consumer>
            {(value) => {
                return (
                    //the img element in the "Home (/)" link needs a proper picture.
                    <div>
                        {value.properties.language === "catalan" && <NavLink className="link" to={navLinks.info}>Informació</NavLink>}
                        {value.properties.language === "spanish" && <NavLink className="link" to={navLinks.info}>Información</NavLink>}
                        {value.properties.language === "english" && <NavLink className="link" to={navLinks.info}>Information</NavLink>}

                        {value.properties.language === "catalan" && <NavLink className="link" to={navLinks.quiz}>Joc</NavLink>}
                        {value.properties.language === "spanish" && <NavLink className="link" to={navLinks.quiz}>Juego</NavLink>}
                        {value.properties.language === "english" && <NavLink className="link" to={navLinks.quiz}>Game</NavLink>}

                        <NavLink className="link" to={navLinks.home}>
                            <img src={logo} alt="Wedding App logo" />    
                        </NavLink>
                        
                        {value.properties.language === "catalan" && <NavLink className="link" to={navLinks.market}>Mercat</NavLink>}
                        {value.properties.language === "spanish" && <NavLink className="link" to={navLinks.market}>Mercado</NavLink>}
                        {value.properties.language === "english" && <NavLink className="link" to={navLinks.market}>Market</NavLink>}

                        {value.properties.language === "catalan" && <NavLink className="link" to={navLinks.requests}>Suggeriments</NavLink>}
                        {value.properties.language === "spanish" && <NavLink className="link" to={navLinks.requests}>Sugerencias</NavLink>}
                        {value.properties.language === "english" && <NavLink className="link" to={navLinks.requests}>Suggestions</NavLink>}
                    </div>
                )
            }}
        </LangContext.Consumer>
    )
}

export default FooterNavbar;