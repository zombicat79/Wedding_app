import React from 'react';
import { LangContext } from './../../context/lang-context';
import { Link } from 'react-router-dom';

import LangSelect from './../../components/language_selector/LangSelect';

function HeaderNavbar(props) {
    return (
        <LangContext.Consumer>
            {(value) => {
                return (
                    <div>
                        <LangSelect lang={value.properties.language} handleLang={value.methods} />
                        {props.productsInCart === true && <Link to="/checkout">Items in cart</Link>}
                        {props.productsInCart === false && <p>Empty cart</p>}
                    </div>  
                )
            }}
        </LangContext.Consumer>
    )
}

export default HeaderNavbar;