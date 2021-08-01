import React from 'react';

import texts from './welcomepopup.texts';

const SubPopup4 = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        props.handleStages("happy ending");
    }

    const allergies = props.language === "catalan" ? texts.allergies.cat : props.language === "spanish" ? texts.allergies.esp : texts.allergies.eng;
    const diets = props.language === "catalan" ? texts.diets.cat : props.language === "spanish" ? texts.diets.esp : texts.diets.eng;
    const diets2 = props.language === "catalan" ? texts.diets2.cat : props.language === "spanish" ? texts.diets2.esp : texts.diets2.eng;
    const verb = props.language === "catalan" ? texts.verb.cat : props.language === "spanish" ? texts.verb.esp : texts.verb.eng;
    const verb2 = props.language === "catalan" ? texts.verb2.cat : props.language === "spanish" ? texts.verb2.esp : texts.verb2.eng;

    return (
        <div>
            <h3>{props.language === "catalan" ? texts.question4.cat : props.language === "spanish" ? texts.question4.esp : texts.question4.eng}</h3>
            <p>{props.language === "catalan" ? texts.hint2.cat : props.language === "spanish" ? texts.hint2.esp : texts.hint2.eng}</p>
            <form onSubmit={(e) => handleSubmit(e)}>
                {   
                    allergies.map((el) => {
                        return (
                            <React.Fragment key={el + 1}>
                                <label>{el}</label>
                                <input type="checkbox" name="allergies" value={el} onClick={(e) => props.handleResponses(e)} />
                            </React.Fragment>
                        )
                    })
                }

                {   
                    diets.map((el) => {
                        return (
                            <React.Fragment key={el + 1}>
                                <label>{verb} {el}</label>
                                <input type="checkbox" name="allergies" value={el} onClick={(e) => props.handleResponses(e)} />
                            </React.Fragment>
                        )
                    })
                }

                {   
                    diets2.map((el) => {
                        return (
                            <React.Fragment key={el + 1}>
                                <label>{verb2} {el}</label>
                                <input type="checkbox" name="allergies" value={el} onClick={(e) => props.handleResponses(e)} />
                            </React.Fragment>
                        )
                    })
                }

                <input type="submit" value={props.language === "catalan" ? texts.endButton.cat : props.language === "spanish" ? texts.endButton.esp : texts.endButton.eng} />
            </form>
        </div>
    )
}

export default SubPopup4;