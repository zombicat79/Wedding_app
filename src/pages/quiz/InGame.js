import React from 'react';
import { LangContext } from './../../context/lang-context';

import QuestionBody from '../../components/quiz_components/question_body/QuestionBody';
import QuestionSelector from '../../components/quiz_components/question_selector/QuestionSelector';

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

    return (
        <LangContext.Consumer>
            {(value) => {
                return (
                    <main>
                        <section>
                            {!props.user.questionPref && <QuestionSelector {...props} handleUsers={props.handleUsers} />}
                            {props.user.questionPref &&
                            <div>
                                <QuestionBody {...props} getQuestion={getRandomQuestion} language={value.properties.language} 
                                              handlePartials={props.handlePartials} />
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