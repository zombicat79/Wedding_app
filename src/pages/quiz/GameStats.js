import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import fakeUsers from './../../FakeUsers';
const topUser = {
    name: "",
    points: 0
}
for (const user of fakeUsers.users) {
    if (user.points > topUser.points) {
        topUser.name = user.name;
        topUser.points = user.points;
    }
}

console.log(topUser)

const GameStats = (props) => {
    return (
        <main>
            <section>
                { topUser.name !== props.match.params.id &&
                <>
                    <h1>Come on, {props.match.params.id}!</h1>
                    <h2>You're not that far from {topUser.name}!</h2>
                </>
                }
                { topUser.name === props.match.params.id &&
                <>
                    <h1>Nice and sweet, {props.match.params.id}!</h1>
                    <h2>You're on top of the world!</h2>
                </>
                }
            </section>
            <section>
                {fakeUsers.users.map((oneUser) => {
                    return (<div key={oneUser.name + "1"}>
                                <p>Name: {oneUser.name}</p>
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