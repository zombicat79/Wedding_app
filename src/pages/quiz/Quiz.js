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
                                        { !this.state.rulesIsActive && <button onClick={() => this.handleRules()}>{value.properties.language === "catalan" ? texts.ruleBtnOff.cat : value.properties.language === "spanish" ? texts.ruleBtnOff.esp : texts.ruleBtnOff.eng}</button> }
                                        { this.state.rulesIsActive && <button onClick={() => this.handleRules()}>{value.properties.language === "catalan" ? texts.ruleBtnOn.cat : value.properties.language === "spanish" ? texts.ruleBtnOn.esp : texts.ruleBtnOn.eng}</button> }
                                        { this.state.rulesIsActive &&
                                            <ul>
                                                <li>{value.properties.language === "catalan" ? texts.gameRule1.cat : value.properties.language === "spanish" ? texts.gameRule1.esp : texts.gameRule1.eng}</li>
                                                <li>{value.properties.language === "catalan" ? texts.gameRule2.cat : value.properties.language === "spanish" ? texts.gameRule2.esp : texts.gameRule2.eng}</li>
                                                <li>{value.properties.language === "catalan" ? texts.gameRule3.cat : value.properties.language === "spanish" ? texts.gameRule3.esp : texts.gameRule3.eng}</li>
                                                <li>{value.properties.language === "catalan" ? texts.gameRule4.cat : value.properties.language === "spanish" ? texts.gameRule4.esp : texts.gameRule4.eng}</li>
                                                <li>{value.properties.language === "catalan" ? texts.gameRule5.cat : value.properties.language === "spanish" ? texts.gameRule5.esp : texts.gameRule5.eng}</li>
                                            </ul>
                                        }
                                        <Link to={`/gamestats`}><button>{value.properties.language === "catalan" ? texts.statsBtn.cat : value.properties.language === "spanish" ? texts.statsBtn.esp : texts.statsBtn.eng}</button></Link>
                                        <Link to={`/ingame/${this.props.state.user._id}`}><button onClick={() => this.props.handlePartials("reset")}>{value.properties.language === "catalan" ? texts.startBtn.cat : value.properties.language === "spanish" ? texts.startBtn.esp : texts.startBtn.eng}</button></Link>
                                    </div>
                                </section>
                                }
                                {this.props.state.gameStatus === "finished" &&
                                    <div>
                                        <p>{`Molt bé! Has encertat ${this.props.state.partialWins.answers} preguntes i has guanyat ${this.props.state.partialWins.points} punts!`}</p>
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