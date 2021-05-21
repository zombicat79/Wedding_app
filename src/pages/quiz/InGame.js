import React from 'react';
import { Redirect, Link } from 'react-router-dom';

import QuestionBody from './../../components/question_body/QuestionBody';

import questionsCat from './questions-cat.json';

//to be updated with real users from a DB
import fakeUsers from './../../FakeUsers';

const InGame = (props) => {
    const randomQuestion = questionsCat.questions[Math.floor(Math.random() * questionsCat.questions.length)];
    
    //to be replaced by server logic
    function updateUser(event) {
        const { name, value } = event.target;
        for (const user of fakeUsers.users) {
            if (user.name === name && value === "1") {
                user.rightAnswers += 1;
                user.points += 50;
            }
        }
        console.log(fakeUsers)
    }


    
    return (
        <main>
            <section>
                <QuestionBody {...props} question={randomQuestion} updateUser={updateUser} />
                <div>
                    <button onClick={() => {
                        props.toggleGame();
                        props.history.goBack();
                    }}>
                    Ja en tinc prou
                    </button>
                </div>
            </section>
        </main>
    )
}

export default InGame;