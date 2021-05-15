import React from 'react';

const QuestionBody = (props) => {
    return (
        <div>
            <h1>This is the game</h1>
            <p>{props.question.proposition}</p>
            <ul>
                <li>{props.question.choice1}</li>
                <li>{props.question.choice2}</li>
                <li>{props.question.choice3}</li>
            </ul>
        </div>          
    )
}

export default QuestionBody;