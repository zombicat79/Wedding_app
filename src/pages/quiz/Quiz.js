import React from 'react';
import { Link } from 'react-router-dom'
import { LangContext } from './../../context/lang-context';
import authService from './../../services/auth-service';

class Quiz extends React.Component {
    componentDidMount() {
        authService.getUser()
          .then((loggedInUser) => {
            if (!loggedInUser) {
              this.props.history.replace("/");
            }
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
                                        <h2>Et proposem un joc... quant en saps de la Cris i del David?</h2>
                                        <h1>Participa! Té premi!</h1>
                                    </div>
                                    <div>
                                        <Link to={`/ingame/${this.props.state.user}`}><button>Comença!</button></Link>
                                        <Link to={`/gamestats/${this.props.state.user}`}><button>Veure estadístiques</button></Link>
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