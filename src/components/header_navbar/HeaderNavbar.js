import React from 'react';

import LangSelect from './../../components/language_selector/LangSelect';

function FooterNavbar(props) {
    return (
        <div>
            <LangSelect lang={props.lang} handleLang={props.handleLang} />
        </div>
    )
}

export default FooterNavbar;