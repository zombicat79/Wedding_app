import React from 'react';
import { LangContext } from './../../context/lang-context';

import LangSelect from './../../components/language_selector/LangSelect';

function HeaderNavbar() {
    return (
        <LangContext.Consumer>
            {(value) => {
                return (
                    <div>
                        <LangSelect lang={value.properties.language} handleLang={value.methods} />
                    </div>  
                )
            }}
        </LangContext.Consumer>
    )
}

export default HeaderNavbar;