import React from 'react';
import { LangContext } from './../../context/lang-context';

import ActivityMenu from './../../components/activity_menu/ActivityMenu';

function Info(props) {
    // page needs to be complete with final texts and conditional rendering corresponding selected language.
    return(
        <LangContext.Consumer>
            {(value) => {
                return (
                    <main>
                        <ActivityMenu {...props} lang={value.properties.language}/>
                    </main>
                )
            }}
        </LangContext.Consumer>
    )       
}

export default Info;