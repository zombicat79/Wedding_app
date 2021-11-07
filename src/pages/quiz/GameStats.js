import React from 'react';
import { Link } from 'react-router-dom';

import texts from "./quiz.texts";

class GameStats extends React.Component {
    state = {
        topPlayer: {_id: null, name: "", points: 0},
        extendedList: false
    }

    toggleListFormat = () => {
        this.setState({ extendedList: !this.state.extendedList });
    }

    componentDidMount() {
        let topPlayerId = null;
        let topPlayerName = "";
        let topPlayerPoints = 0;
        
        for (const user of this.props.userList) {
            if (user.points > topPlayerPoints) {
                topPlayerId = user._id;
                topPlayerName = user.casualName;
                topPlayerPoints = user.points;
            }
        }

        this.setState({ topPlayer: {_id: topPlayerId, name: topPlayerName, points: topPlayerPoints} })
    }

    render() {
        const { topPlayer } = this.state;

        const sortedUserList = this.props.userList.sort((a, b) => {
            if (a.points !== b.points) {
                return b.points-a.points;
            }
            else {
                return b.casualName-a.casualName;
            }
        })

        const userRanking = sortedUserList.findIndex((obj) => obj._id === this.props.user._id);

        return (
            <main>
                <section>
                    {/* RANKING BOARD MAIN TITLE */}
                    <h1>{this.props.language === "catalan" ? texts.scoreMainTitle.cat : this.props.language === "spanish" ? texts.scoreMainTitle.esp : texts.scoreMainTitle.eng}</h1>
                </section>
                
                <section>
                    {/* USER RANKING MESSAGES */}
                    {/* No scores message */}
                    { topPlayer.points === 0 &&
                    <div>
                        <h2>{this.props.language === "catalan" ? texts.scoreMsgFresh1.cat : this.props.language === "spanish" ? texts.scoreMsgFresh1.esp : texts.scoreMsgFresh1.eng}, {this.props.user.casualName}!</h2>
                        <h2>{this.props.language === "catalan" ? texts.scoreMsgFresh2.cat : this.props.language === "spanish" ? texts.scoreMsgFresh2.esp : texts.scoreMsgFresh2.eng}</h2>
                    </div>
                    }
                    {/* User ranks 30+ message */}
                    { topPlayer.name !== "" && topPlayer.name !== this.props.user.casualName &&
                      userRanking > 30 &&
                    <div>
                        <h2>{this.props.language === "catalan" ? texts.scoreMsgAwful1.cat : this.props.language === "spanish" ? texts.scoreMsgAwful1.esp : texts.scoreMsgAwful1.eng}{this.props.user.casualName}!</h2>
                        <h2>{this.props.language === "catalan" ? texts.scoreMsgAwful2.cat : this.props.language === "spanish" ? texts.scoreMsgAwful2.esp : texts.scoreMsgAwful2.eng} {topPlayer.name}. {this.props.language === "catalan" ? texts.scoreMsgAwful3.cat : this.props.language === "spanish" ? texts.scoreMsgAwful3.esp : texts.scoreMsgAwful3.eng}</h2>
                    </div>
                    }
                    {/* User ranks between 11 and 30 message */}
                    { topPlayer.name !== "" && topPlayer.name !== this.props.user.casualName &&
                      userRanking >= 10 && userRanking <= 30 &&
                    <div>
                        <h2>{this.props.language === "catalan" ? texts.scoreMsgFresh1.cat : this.props.language === "spanish" ? texts.scoreMsgFresh1.esp : texts.scoreMsgFresh1.eng}, {this.props.user.casualName}!</h2>
                        <h2>{this.props.language === "catalan" ? texts.scoreMsgMedium.cat : this.props.language === "spanish" ? texts.scoreMsgMedium.esp : texts.scoreMsgMedium.eng} {topPlayer.name}!</h2>
                    </div>
                    }
                    {/* User ranks amongst the 10 best message */}
                    { topPlayer.name !== "" && topPlayer.name !== this.props.user.casualName && 
                      userRanking >= 3 && userRanking < 10 &&
                    <div>
                        <h2>{this.props.language === "catalan" ? texts.scoreMsgTop1.cat : this.props.language === "spanish" ? texts.scoreMsgTop1.esp : texts.scoreMsgTop1.eng} {this.props.user.casualName}!</h2>
                        <h2>{this.props.language === "catalan" ? texts.scoreMsgTop2.cat : this.props.language === "spanish" ? texts.scoreMsgTop2.esp : texts.scoreMsgTop2.eng}</h2>
                    </div>
                    }
                    {/* User ranks in the top 3 message */}
                    { topPlayer.name !== "" && topPlayer.name !== this.props.user.casualName && 
                      userRanking < 3 &&
                    <div>
                        <h2>{this.props.language === "catalan" ? texts.scoreMsgTop1.cat : this.props.language === "spanish" ? texts.scoreMsgTop1.esp : texts.scoreMsgTop1.eng} {this.props.user.casualName}!</h2>
                        <h2>{this.props.language === "catalan" ? texts.scoreMsgSupertop.cat : this.props.language === "spanish" ? texts.scoreMsgSupertop.esp : texts.scoreMsgSupertop.eng} {topPlayer.name}!</h2>
                    </div>
                    }
                    {/* User ranks first message */}
                    { topPlayer.name === this.props.user.casualName &&
                    <div>
                        <h2>{this.props.language === "catalan" ? texts.scoreMsgBest1.cat : this.props.language === "spanish" ? texts.scoreMsgBest1.esp : texts.scoreMsgBest1.eng}, {this.props.user.casualName}!</h2>
                        <h2>{this.props.language === "catalan" ? texts.scoreMsgBest2.cat : this.props.language === "spanish" ? texts.scoreMsgBest2.esp : texts.scoreMsgBest2.eng}</h2>
                    </div>
                    }
                </section>
                
                <section>
                    {/* PLAYER RANKING */}
                    {
                        sortedUserList.map((oneUser, index) => {
                            if ((this.state.extendedList === false && index < 10) || this.state.extendedList === true) {
                                if (oneUser._id === topPlayer._id) {
                                    return (<div key={oneUser.username}>
                                        <h3>{index + 1}</h3>
                                        <h4>{oneUser.casualName} {oneUser.lastName}</h4>
                                        <h4>{oneUser.correctAnswers.total} {this.props.language === "catalan" ? texts.rightAnswersMsg.cat : this.props.language === "spanish" ? texts.rightAnswersMsg.esp : texts.rightAnswersMsg.eng}</h4>
                                        <h4>{oneUser.points} {this.props.language === "catalan" ? texts.pointsMsg.cat : this.props.language === "spanish" ? texts.pointsMsg.esp : texts.pointsMsg.eng}</h4>
                                    </div>)
                                }
                                if (oneUser._id === this.props.user._id) {
                                    return (<div key={oneUser.username}>
                                        <strong><h3>{index + 1}</h3></strong>
                                        <strong><p>{oneUser.casualName} {oneUser.lastName}</p></strong>
                                        <strong><p>{oneUser.correctAnswers.total} {this.props.language === "catalan" ? texts.rightAnswersMsg.cat : this.props.language === "spanish" ? texts.rightAnswersMsg.esp : texts.rightAnswersMsg.eng}</p></strong>
                                        <strong><p>{oneUser.points} {this.props.language === "catalan" ? texts.pointsMsg.cat : this.props.language === "spanish" ? texts.pointsMsg.esp : texts.pointsMsg.eng}</p></strong>
                                    </div>)
                                }
                                else {
                                    return (<div key={oneUser.username}>
                                        <p>{index + 1}</p>
                                        <p>{oneUser.casualName} {oneUser.lastName}</p>
                                        <p>{oneUser.correctAnswers.total} {this.props.language === "catalan" ? texts.rightAnswersMsg.cat : this.props.language === "spanish" ? texts.rightAnswersMsg.esp : texts.rightAnswersMsg.eng}</p>
                                        <p>{oneUser.points} {this.props.language === "catalan" ? texts.pointsMsg.cat : this.props.language === "spanish" ? texts.pointsMsg.esp : texts.pointsMsg.eng}</p>  
                                    </div>)
                                }
                            }
                        })
                    }
                </section>
                
                <section>
                    {/* NAV BUTTONS */}
                    <div>
                        {!this.state.extendedList && <button onClick={() => this.toggleListFormat()}>{this.props.language === "catalan" ? texts.rankingBtnMore.cat : this.props.language === "spanish" ? texts.rankingBtnMore.esp : texts.rankingBtnMore.eng}</button>}
                        {this.state.extendedList && <button onClick={() => this.toggleListFormat()}>{this.props.language === "catalan" ? texts.rankingBtnLess.cat : this.props.language === "spanish" ? texts.rankingBtnLess.esp : texts.rankingBtnLess.eng}</button>}
                        <Link to="/quiz" ><button>{this.props.language === "catalan" ? texts.rankingBtnBack.cat : this.props.language === "spanish" ? texts.rankingBtnBack.esp : texts.rankingBtnBack.eng}</button></Link>
                    </div>
                </section>
            </main>
        )
    }
}

export default GameStats;