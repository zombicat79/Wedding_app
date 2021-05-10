import React from 'react';
import { LangContext, LangProvider} from './../context/lang-context'
const Test = function(props) {
    
    return (
        <LangContext.Consumer>
            {(value) => {
                return (
                    <div>
                        <h1>{value.language}</h1>
                    </div>
                )
            }}
        </LangContext.Consumer>
    )
}

export default Test;