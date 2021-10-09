import React from 'react';
import { Link } from 'react-router-dom';

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
        
        return (
            <main>
                <section>
                    <h1>High score</h1>
                </section>
                <section>
                    { topPlayer.points === 0 &&
                    <>
                        <h2>Come on, {this.props.user.casualName}!</h2>
                        <h2>Be the first to score!</h2>
                    </>
                    }
                    { topPlayer.name !== "" && topPlayer.name !== this.props.user.casualName &&
                    <>
                        <h1>Come on, {this.props.user.casualName}!</h1>
                        <h2>You're not that far from {topPlayer.name}!</h2>
                    </>
                    }
                    { topPlayer.name === this.props.user.casualName &&
                    <>
                        <h1>Nice and sweet, {this.props.user.casualName}!</h1>
                        <h2>You're on top of the world!</h2>
                    </>
                    }
                </section>
                <section>
                    {
                        sortedUserList.map((oneUser, index) => {
                            if ((this.state.extendedList === false && index < 10) || this.state.extendedList === true) {
                                if (oneUser._id === topPlayer._id) {
                                    return (<div key={oneUser.username}>
                                        <h3>Name: {oneUser.casualName}</h3>
                                        <h3>Right Answers: {oneUser.rightAnswers}</h3>
                                        <h3>Points: {oneUser.points}</h3>
                                    </div>)
                                }
                                if (oneUser._id === this.props.user._id) {
                                    return (<div key={oneUser.username}>
                                        <strong><p>Name: {oneUser.casualName}</p></strong>
                                        <strong><p>Right Answers: {oneUser.rightAnswers}</p></strong>
                                        <strong><p>Points: {oneUser.points}</p></strong>
                                    </div>)
                                }
                                else {
                                    return (<div key={oneUser.username}>
                                        <p>Name: {oneUser.casualName}</p>
                                        <p>Right Answers: {oneUser.rightAnswers}</p>
                                        <p>Points: {oneUser.points}</p>  
                                    </div>)
                                }
                            }
                        })
                    }
                    <div>
                        {!this.state.extendedList && <button onClick={() => this.toggleListFormat()}>Show more</button>}
                        {this.state.extendedList && <button onClick={() => this.toggleListFormat()}>Show less</button>}
                        <Link to="/quiz" ><button>Back to game</button></Link>
                    </div>
                </section>
            </main>
        )
    }
}

export default GameStats;