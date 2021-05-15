import React from 'react';
import { Redirect } from 'react-router-dom';

import QuestionBody from './../../components/question_body/QuestionBody';

import questionsCat from './questions-cat.json';

const InGame = (props) => {
    console.log(props)
    const randomQuestion = questionsCat.questions[Math.floor(Math.random() * questionsCat.questions.length)];
    
    return (
        <main>
            <section>
                <QuestionBody question={randomQuestion} />
                <div>
                    <button onClick={() => {
                        props.toggleGame();
                    }}>
                    Ja en tinc prou
                    </button>
                </div>
            </section>
        </main>
    )
}

export default InGame;