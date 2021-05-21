import React from 'react';

const QuestionBody = (props) => {
    console.log(props.match.params)
    return (
        <div>
            <h1>This is the game</h1>
            <p>{props.question.proposition}</p>
            <ul>
                <li>
                    {props.question.choice1}
                    <input onClick={(e) => props.updateUser(e)} type="checkbox" name={props.match.params.id} value="1" />
                </li>
                <li>
                    {props.question.choice2}
                    <input onClick={(e) => props.updateUser(e)} type="checkbox" name={props.match.params.id} value="0" />
                </li>
                <li>
                    {props.question.choice3}
                    <input onClick={(e) => props.updateUser(e)} type="checkbox" name={props.match.params.id} value="0" />
                </li>
            </ul>
        </div>          
    )
}

export default QuestionBody;