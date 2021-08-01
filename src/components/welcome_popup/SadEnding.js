import React from 'react';

import texts from "./welcomepopup.texts";

const SadEnding = (props) => {
    return (
        <div>
            <h3>{props.language === "catalan" ? texts.sadHeader.cat : props.language === "spanish" ? texts.sadHeader.esp : texts.sadHeader.eng}</h3>
            <p>{props.language === "catalan" ? texts.sadFeelings.cat : props.language === "spanish" ? texts.sadFeelings.esp : texts.sadFeelings.eng}</p>
            <p>{props.language === "catalan" ? texts.sadCue.cat : props.language === "spanish" ? texts.sadCue.esp : texts.sadCue.eng}</p>
            <p>{props.language === "catalan" ? texts.sadDismissal.cat : props.language === "spanish" ? texts.sadDismissal.esp : texts.sadDismissal.eng}</p>
            <button onClick={() => props.closePopup()}>{props.language === "catalan" ? texts.closeButton.cat : props.language === "spanish" ? texts.closeButton.esp : texts.closeButton.eng}</button>
        </div>
    )
}

export default SadEnding;