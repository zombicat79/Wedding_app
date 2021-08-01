import React from 'react';

import texts from "./welcomepopup.texts";

const HappyEnding = (props) => {
    return (
        <div>
            <p>{props.language === "catalan" ? texts.thanks.cat : props.language === "spanish" ? texts.thanks.esp : texts.thanks.eng}</p>
            <p>{props.language === "catalan" ? texts.endCue.cat : props.language === "spanish" ? texts.endCue.esp : texts.endCue.eng}</p>
            <h3>{props.language === "catalan" ? texts.happyDismissal.cat : props.language === "spanish" ? texts.happyDismissal.esp : texts.happyDismissal.eng}</h3>
            <button onClick={() => props.closePopup()}>{props.language === "catalan" ? texts.closeButton.cat : props.language === "spanish" ? texts.closeButton.esp : texts.closeButton.eng}</button>
        </div>
    )
}

export default HappyEnding;