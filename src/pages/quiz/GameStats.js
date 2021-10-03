import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import fakeUsers from './../../FakeUsers';

const GameStats = (props) => {
    const topUser = {
        name: "",
        points: 0
    }
    for (const user of props.userList) {
        if (user.points > topUser.points) {
            topUser.name = user.casualName;
            topUser.points = user.points;
        }
    }

    return (
        <main>
            <section>
                { topUser.name !== props.user.casualName &&
                <>
                    <h1>Come on, {props.user.casualName}!</h1>
                    <h2>You're not that far from {topUser.name}!</h2>
                </>
                }
                { topUser.name === props.user.casualName &&
                <>
                    <h1>Nice and sweet, {props.user.casualName}!</h1>
                    <h2>You're on top of the world!</h2>
                </>
                }
            </section>
            <section>
                {props.userList.map((oneUser) => {
                    return (<div key={oneUser.username}>
                                <p>Name: {oneUser.casualName}</p>
                                <p>Right Answers: {oneUser.rightAnswers}</p>
                                <p>Points: {oneUser.points}</p>    
                            </div>)
                })}
                <div>
                    <Link to="/quiz" ><button>Back to game</button></Link>
                </div>
            </section>
        </main>
    )
}

export default GameStats;