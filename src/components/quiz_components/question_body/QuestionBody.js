import React from 'react';
import questionService from '../../../services/question-service';
import userService from '../../../services/user-service';

class QuestionBody extends React.Component {
    state = {
        user: null,
        question: null,
        playerAnswer: ""
    }

    handleChoice = (event) => {
        const { value } = event.target;
        this.setState({ playerAnswer: value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const playerAnswer = Number(this.state.playerAnswer);
        questionService.getOne(this.state.question._id)
            .then((data) => {
                if (data.rightAnswer === playerAnswer) {
                    const pointsUpdate = this.state.user.points + data.points;
                    return userService.updateUser(this.state.user._id, "points", pointsUpdate)
                }
                else {
                    const pointsUpdate = this.state.user.points - data.penalty;
                    return userService.updateUser(this.state.user._id, "points", pointsUpdate)
                }
            })
            .then((userResponse) => {
                this.setState({ user: userResponse })
            })
            .catch((err) => console.log(err));
        this.setState({ question: this.props.getQuestion() })
    }

    componentDidMount() {
        this.setState({ user: this.props.user, question: this.props.getQuestion() })
    }

    render() {
        console.log(this.state.question)
        return (
            <div>
                <h1>This is the game</h1>
                {this.state.question !== null && 
                <div>
                    <p>{this.props.language === "catalan" ? this.state.question.body.cat : this.props.language === "spanish" ? this.state.question.body.esp : this.state.question.body.eng}</p>
                    <form onSubmit={(e) => this.handleSubmit(e)}>
                        <ul>
                            <li>
                                {this.props.language === "catalan" ? this.state.question.possibleAnswers[0].cat : this.props.language === "spanish" ? this.state.question.possibleAnswers[0].esp : this.state.question.possibleAnswers[0].eng}
                                <input onClick={(e) => this.handleChoice(e)} type="radio" name={this.state.question._id} value="0" />
                            </li>
                            <li>
                                {this.props.language === "catalan" ? this.state.question.possibleAnswers[1].cat : this.props.language === "spanish" ? this.state.question.possibleAnswers[1].esp : this.state.question.possibleAnswers[1].eng}
                                <input onClick={(e) => this.handleChoice(e)} type="radio" name={this.state.question._id} value="1" />
                            </li>
                            <li>
                                {this.props.language === "catalan" ? this.state.question.possibleAnswers[2].cat : this.props.language === "spanish" ? this.state.question.possibleAnswers[2].esp : this.state.question.possibleAnswers[2].eng}
                                <input onClick={(e) => this.handleChoice(e)} type="radio" name={this.state.question._id} value="2" />
                            </li>
                        </ul>
        
                        <input type="submit" value="Confirma resposta" />
                    </form>
                    <button onClick={() => this.setState({ question: this.props.getQuestion() })}>Pasapalabra</button>
                </div>
                }
            </div>          
        )
    }
}

export default QuestionBody;