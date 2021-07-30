import React from 'react';

import texts from './welcomepopup.texts';

const SubPopup2 = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        props.handleStages(1);
    }

    return (
        <div>
            <h3>{props.language === "catalan" ? texts.question2.cat : props.language === "spanish" ? texts.question2.esp : texts.question2.eng}</h3>
            <p>{props.language === "catalan" ? texts.hint2.cat : props.language === "spanish" ? texts.hint2.esp : texts.hint2.eng}</p>
            <form onSubmit={(e) => handleSubmit(e)}>
                {
                    props.user.kids.map((el) => {
                        return (
                            <React.Fragment key={el + 1}>
                                <label>{el}</label>
                                <input type="checkbox" />
                            </React.Fragment>
                        )
                    })
                }

                <input type="submit" value={props.language === "catalan" ? texts.button.cat : props.language === "spanish" ? texts.button.esp : texts.button.eng} />
            </form>
        </div>
    )
}

export default SubPopup2;