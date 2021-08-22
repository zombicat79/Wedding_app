import React from 'react';
import { LangContext } from './../../context/lang-context';

import QuestionBody from '../../components/quiz_components/question_body/QuestionBody';
import QuestionSelector from '../../components/quiz_components/question_selector/QuestionSelector';

//to be updated with real users from a DB
import fakeUsers from './../../FakeUsers';

const InGame = (props) => {
    const getRandomQuestion = () => {
        if (props.user.questionPref === "Cristina") {
            const questionGroup = props.questions.filter((el) => el.subject === "Cristina");
            return questionGroup[Math.floor(Math.random() * questionGroup.length)];
        }
        else if (props.user.questionPref === "David") {
            const questionGroup = props.questions.filter((el) => el.subject === "David");
            return questionGroup[Math.floor(Math.random() * questionGroup.length)];
        }
        else {
            const questionGroup = props.questions.filter((el) => el.subject === "both");
            return questionGroup[Math.floor(Math.random() * questionGroup.length)];
        }
    }

    const randomQuestion = getRandomQuestion();
    console.log(randomQuestion)
    
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
        <LangContext.Consumer>
            {(value) => {
                return (
                    <main>
                        <section>
                            {!props.user.questionPref && <QuestionSelector {...props} handleUsers={props.handleUsers} />}
                            {props.user.questionPref &&
                            <div>
                                <QuestionBody {...props} question={randomQuestion} updateUser={updateUser} language={value.properties.language} />
                                <div>
                                    <button onClick={() => {
                                        props.toggleGame();
                                        props.history.goBack();
                                    }}>
                                    Ja en tinc prou
                                    </button>
                                </div>
                            </div>}
                        </section>
                    </main>
        
                )
            }}
        </LangContext.Consumer>
    )
}

export default InGame;