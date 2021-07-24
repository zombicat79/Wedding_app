import React from 'react';

const LangSelect = (props) => {
    // buttons should be replace by country flags.
    return (
        <React.Fragment>
        {props.popupIsActive === true 
        ?
        <div>
            <button disabled onClick={(e) => props.handleLang(e)} name="catalan">Català</button>
            <button disabled onClick={(e) => props.handleLang(e)} name="spanish">Español</button>
            <button disabled onClick={(e) => props.handleLang(e)} name="english">English</button>
        </div>
        :
        <div>
            <button onClick={(e) => props.handleLang(e)} name="catalan">Català</button>
            <button onClick={(e) => props.handleLang(e)} name="spanish">Español</button>
            <button onClick={(e) => props.handleLang(e)} name="english">English</button>
        </div>
        }
        </React.Fragment>
    )
};

export default LangSelect;