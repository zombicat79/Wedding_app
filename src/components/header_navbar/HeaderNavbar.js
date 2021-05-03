import React from 'react';
import { Link } from 'react-router-dom';

function HeaderNavbar(props) {
    return (
        //anchors must be substituted for React Links once all the pages are created and the Router is set up.
        //the img element in the "Home" link needs a proper picture.
        <div>
            {props.lang === "catalan" && <a href="https://www.bbc.com/mundo">Informació</a>}
            {props.lang === "spanish" && <a href="https://www.bbc.com/mundo">Información</a>}
            {props.lang === "english" && <a href="https://www.bbc.com/mundo">Information</a>}

            {props.lang === "catalan" && <a href="https://www.google.es">Joc</a>}
            {props.lang === "spanish" && <a href="https://www.google.es">Juego</a>}
            {props.lang === "english" && <a href="https://www.google.es">Game</a>}

            <a href="https://www.google.es/maps">
                <img src="" />    
            </a>
            
            {props.lang === "catalan" && <a href="https://www.amazon.es/">Mercat</a>}
            {props.lang === "spanish" && <a href="https://www.amazon.es/">Mercado</a>}
            {props.lang === "english" && <a href="https://www.amazon.es/">Market</a>}

            {props.lang === "catalan" && <a href="https://www.booking.com/">Suggeriments</a>}
            {props.lang === "spanish" && <a href="https://www.booking.com/">Sugerencias</a>}
            {props.lang === "english" && <a href="https://www.booking.com/">Suggestions</a>}
        </div>
    )
}

export default HeaderNavbar;