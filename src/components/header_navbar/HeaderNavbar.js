import React from 'react';
import { LangContext } from './../../context/lang-context';
import { Link } from 'react-router-dom';

import LangSelect from './../../components/language_selector/LangSelect';

function HeaderNavbar(props) {
    let navLinks = {
        checkout: "/checkout",
        profile: `/profile/${props.user._id}`
    };

    if (props.popupIsActive === true) {
        navLinks.checkout = "";
        navLinks.profile = "";
    }
    
    return (
        <LangContext.Consumer>
            {(value) => {
                return (
                    <React.Fragment>
                        <div>
                            <LangSelect lang={value.properties.language} handleLang={value.methods} popupIsActive={props.popupIsActive} />
                            {props.productsInCart === true && <Link className="link" to={navLinks.checkout}>Items in cart</Link>}
                            {props.productsInCart === false && <p>Empty cart</p>}
                        </div>
                        <div>
                            <Link className="link" to={navLinks.profile}>Profile</Link>
                        </div>
                    </React.Fragment>
                )
            }}
        </LangContext.Consumer>
    )
}

export default HeaderNavbar;