import React from 'react';

const QuestionSelector = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        props.history.replace("/requests") // Has to be replaced with the correct direction (ingame/user:id)
    }
    
    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="cris-select">Cristina</label>
                <input id="cris-select" type="radio" name="questionSelector" value="cristina" />
                
                <label htmlFor="david-select">David</label>
                <input id="david-select" type="radio" name="questionSelector" value="david" />
                
                <label htmlFor="both-select">Tots dos</label>
                <input id="both-select" type="radio" name="questionSelector" value="both" />

                <input type="submit" value="Confirma!" />
            </form>
        </div>
    )
}

export default QuestionSelector;