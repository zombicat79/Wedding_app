import React from 'react';

const LangSelect = (props) => {
    // buttons should be replace by country flags.
    return (
        <div>
            <button onClick={(e) => props.handleLang(e)} name="catalan">Català</button>
            <button onClick={(e) => props.handleLang(e)} name="spanish">Español</button>
            <button onClick={(e) => props.handleLang(e)} name="english">English</button>
        </div>
    )
};

export default LangSelect;