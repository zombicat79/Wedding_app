import React from 'react';
import { Link } from 'react-router-dom'
import { LangContext } from './../../context/lang-context';
import authService from './../../services/auth-service';
import userService from './../../services/user-service';
import questionService from './../../services/question-service';

import texts from './quiz.texts';

class Quiz extends React.Component {
    state = {
        rulesIsActive: false,
        questions: null,
        allUsers: null,
    }

    handleRules = () => {
        this.setState({ rulesIsActive: !this.state.rulesIsActive })
    }
    
    componentDidMount() {
        authService.getUser()
          .then((loggedInUser) => {
            if (!loggedInUser._id) {
              this.props.history.replace("/");
            }
          })
          .catch((err) => console.log(err));

        userService.getAll()
            .then((allUsers) => {
                this.props.handleUsersList(allUsers);
            })
            .catch((err) => console.log(err));

        questionService.getAll()
            .then((allQuestions) => {
                this.props.handleQuestions(allQuestions);
        })
        .catch((err) => console.log(err));
    }
    
    render() {
        return (
            <LangContext.Consumer>
                {(value) => {
                    return (
                        <main>
                                {this.props.state.gameStatus === "new" && 
                                <section>
                                    <div>
                                        <p>{value.properties.language === "catalan" ? texts.intro.cat : value.properties.language === "spanish" ? texts.intro.esp : texts.intro.eng}</p>
                                        <h1>{value.properties.language === "catalan" ? texts.gameProposal.cat : value.properties.language === "spanish" ? texts.gameProposal.esp : texts.gameProposal.eng}</h1>
                                        <h2>{value.properties.language === "catalan" ? texts.playInvitation.cat : value.properties.language === "spanish" ? texts.playInvitation.esp : texts.playInvitation.eng}</h2>
                                    </div>
                                    <div>
                                        <button onClick={() => this.handleRules()}>{value.properties.language === "catalan" ? texts.ruleBtn.cat : value.properties.language === "spanish" ? texts.ruleBtn.esp : texts.ruleBtn.eng}</button>
                                        { this.state.rulesIsActive &&
                                            <ul>
                                                <li>El joc consisteix en una sèrie de preguntes sobre els nuvis, puntuades segons grau de dificultat</li>
                                                <li>Les respostes incorrectes, resten puntuació. Existeix l'opció de passar.</li>
                                                <li>Abans de començar el joc hi haurà l'opció de jugar amb preguntes relatives a un dels nuvis o tots dos. Escollir aquesta via atorga puntuacions més altes per respostes correctes. No es pot canviar.</li>
                                                <li>El guanyador serà aquella persona que hagi acumulat una puntuació més alta en data del casament</li>
                                                <li>El premi serà entregat el dia del casament</li>
                                            </ul>
                                        }
                                        <Link to={`/gamestats/${this.props.state.user._id}`}><button>{value.properties.language === "catalan" ? texts.statsBtn.cat : value.properties.language === "spanish" ? texts.statsBtn.esp : texts.statsBtn.eng}</button></Link>
                                        <Link to={`/ingame/${this.props.state.user._id}`}><button>{value.properties.language === "catalan" ? texts.startBtn.cat : value.properties.language === "spanish" ? texts.startBtn.esp : texts.startBtn.eng}</button></Link>
                                    </div>
                                </section>
                                }
                                {this.props.state.gameStatus === "finished" &&
                                    <div>
                                        <p>{`Molt bé! Has encertat ${this.props.state.rightAnswers} preguntes i has guanyat ${this.props.state.points} punts!`}</p>
                                    </div>
                                }
                        </main>
                    )
                }}
            </LangContext.Consumer>
        )                
    }
}

export default Quiz;