import React from 'react';

import userService from './../../../services/user-service';

const QuestionSelector = (props) => {
    const handleSelection = (selection) => {
        userService.updateUser(props.user._id, "questionPref", selection)
            .then((updatedUser) => {
                props.handleUsers(updatedUser)
            })
            .catch((err) => console.log(err));
    }

    const goToQuestions = () => {
        props.history.replace(`/ingame/${props.user._id}`)
    }
    
    return (
        <div>
            <div>
                <label htmlFor="cris-select">Cristina</label>
                <input id="cris-select" type="radio" name="questionSelector" onClick={() => handleSelection("Cristina")} />
                
                <label htmlFor="david-select">David</label>
                <input id="david-select" type="radio" name="questionSelector" onClick={() => handleSelection("David")} />
                
                <label htmlFor="both-select">Tots dos</label>
                <input id="both-select" type="radio" name="questionSelector" onClick={() => handleSelection("both")} />
            </div>
            <button onClick={() => goToQuestions()}>Confirma!</button>       
        </div>
    )
}

export default QuestionSelector;