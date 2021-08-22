import React from 'react';

const QuestionBody = (props) => {
    console.log(props.match.params)
    return (
        <div>
            <h1>This is the game</h1>
            <p>{props.language === "catalan" ? props.question.body.cat : props.language === "spanish" ? props.question.body.esp : props.question.body.eng}</p>
            <ul>
                <li>
                    {props.language === "catalan" ? props.question.possibleAnswers[0].cat : props.language === "spanish" ? props.question.possibleAnswers[0].esp : props.question.possibleAnswers[0].eng}
                    <input onClick={(e) => props.updateUser(e)} type="checkbox" name={props.match.params.id} value="0" />
                </li>
                <li>
                    {props.language === "catalan" ? props.question.possibleAnswers[1].cat : props.language === "spanish" ? props.question.possibleAnswers[1].esp : props.question.possibleAnswers[1].eng}
                    <input onClick={(e) => props.updateUser(e)} type="checkbox" name={props.match.params.id} value="1" />
                </li>
                <li>
                    {props.language === "catalan" ? props.question.possibleAnswers[2].cat : props.language === "spanish" ? props.question.possibleAnswers[2].esp : props.question.possibleAnswers[2].eng}
                    <input onClick={(e) => props.updateUser(e)} type="checkbox" name={props.match.params.id} value="2" />
                </li>
            </ul>
        </div>          
    )
}

export default QuestionBody;