import React from 'react';
import { LangContext } from './../../context/lang-context';

import ActivityMenu from './../../components/activity_menu/ActivityMenu';

function Requests(props) {
    return (
        <LangContext.Consumer>
            {(value) => {
                return (
                    <main>
                        <h1>This is the requests page</h1>
                        <ActivityMenu {...props} />
                    </main>
                )
            }}
        </LangContext.Consumer>
    )
}

export default Requests;