import React from 'react';

import texts from './welcomepopup.texts';

const SubPopup3 = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        props.handleStages(1);
    }
    
    return (
        <div>
            <p>{props.language === "catalan" ? texts.hint3.cat : props.language === "spanish" ? texts.hint3.esp : texts.hint3.eng}</p>
            <h3>{props.language === "catalan" ? texts.question3.cat : props.language === "spanish" ? texts.question3.esp : texts.question3.eng}</h3>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="confirmation" >{props.language === "catalan" ? texts.answer.cat.positive : props.language === "spanish" ? texts.answer.esp.positive : texts.answer.eng.positive}</label>
                <input id="confirmation" type="radio" name="attending" value="true" onClick={(e) => {props.handleResponses(e)}} />

                <label htmlFor="denial" >{props.language === "catalan" ? texts.answer.cat.negative : props.language === "spanish" ? texts.answer.esp.negative : texts.answer.eng.negative}</label>
                <input id="denial" type="radio" name="attending" value="false" onClick={(e) => {props.handleResponses(e)}} />

                <input type="submit" value={props.language === "catalan" ? texts.button.cat : props.language === "spanish" ? texts.button.esp : texts.button.eng} />
            </form>
        </div>
    )
}

export default SubPopup3;