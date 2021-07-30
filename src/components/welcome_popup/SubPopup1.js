import React from 'react';

import texts from './welcomepopup.texts';

const SubPopup1 = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        if (props.user.kids.length > 0) {
            props.handleStages(1);
        }
        else {
            props.handleStages(2);
        }
    }
    
    return (
        <div>
            <p>{props.language === "catalan" ? texts.greeting.cat : props.language === "spanish" ? texts.greeting.esp : texts.greeting.eng} {props.user.casualName}!</p>
            <p>{props.language === "catalan" ? texts.anouncement.cat : props.language === "spanish" ? texts.anouncement.esp : texts.anouncement.eng}</p>
            <p>{props.language === "catalan" ? texts.prequestion.cat : props.language === "spanish" ? texts.prequestion.esp : texts.prequestion.eng}</p>
            <h3>{props.language === "catalan" ? texts.question1.cat : props.language === "spanish" ? texts.question1.esp : texts.question1.eng}</h3>
            <p>{props.language === "catalan" ? texts.unstresser.cat : props.language === "spanish" ? texts.unstresser.esp : texts.unstresser.eng}</p>
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

export default SubPopup1;