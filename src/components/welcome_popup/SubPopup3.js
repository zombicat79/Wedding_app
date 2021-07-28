import React from 'react';

import texts from './welcomepopup.texts';

const SubPopup3 = (props) => {
    return (
        <div>
            <p>{props.language === "catalan" ? texts.greeting.cat : props.language === "spanish" ? texts.greeting.esp : texts.greeting.eng} {props.user.casualName}!</p>
            <h3>{props.language === "catalan" ? texts.anouncement.cat : props.language === "spanish" ? texts.anouncement.esp : texts.anouncement.eng}</h3>
            <h2>{props.language === "catalan" ? texts.question1.cat : props.language === "spanish" ? texts.question1.esp : texts.question1.eng}</h2>
            <p>{props.language === "catalan" ? texts.unstresser.cat : props.language === "spanish" ? texts.unstresser.esp : texts.unstresser.eng}</p>
            <form>
                <label>Pas3</label>
                <input type="checkbox" />

                <label>Pas3</label>
                <input type="checkbox" />

                <input type="submit" value={props.language === "catalan" ? texts.endButton.cat : props.language === "spanish" ? texts.endButton.esp : texts.endButton.eng} />
            </form>
        </div>
    )
}

export default SubPopup3;