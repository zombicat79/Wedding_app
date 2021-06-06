import React from 'react';
import { Link } from 'react-router-dom'
import { LangContext } from './../../context/lang-context';

const Quiz = (props) => {
    return (
        <LangContext.Consumer>
            {(value) => {
                return (
                    <main>
                            {props.state.gameStatus === "new" && 
                            <section>
                                <div>
                                    <h2>Et proposem un joc... quant en saps de la Cris i del David?</h2>
                                    <h1>Participa! Té premi!</h1>
                                </div>
                                <div>
                                    <Link to={`/ingame/${props.state.user}`}><button>Comença!</button></Link>
                                    <Link to={`/gamestats/${props.state.user}`}><button>Veure estadístiques</button></Link>
                                </div>
                            </section>
                            }
                            {props.state.gameStatus === "finished" &&
                                <div>
                                    <p>{`Molt bé! Has encertat ${props.state.rightAnswers} preguntes i has guanyat ${props.state.points} punts!`}</p>
                                </div>
                            }
                    </main>
                )
            }}
        </LangContext.Consumer>
    )        
}

export default Quiz;