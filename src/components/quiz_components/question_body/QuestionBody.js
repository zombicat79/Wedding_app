import React from 'react';
import questionService from '../../../services/question-service';
import userService from '../../../services/user-service';
import authService from '../../../services/auth-service';

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
                    const pr1 = userService.updateUser(this.state.user._id, "points", pointsUpdate);
                    const pr2 = userService.updateUser(this.state.user._id, "correctAnswers", data._id);
                    return Promise.all([pr1, pr2]);
                }
                else {
                    const pointsUpdate = this.state.user.points - data.penalty;
                    const pr1 = userService.updateUser(this.state.user._id, "points", pointsUpdate);
                    const pr2 = userService.updateUser(this.state.user._id, "wrongAnswers", data._id);
                    return Promise.all([pr1, pr2]);
                }
            })
            .then((userResponse) => {
                let newQuestion = this.props.getQuestion();
                let probedQuestions = 0;
                if (userResponse[1].correctAnswers.questions && userResponse[1].wrongAnswers.questions) {
                    while ((userResponse[1].correctAnswers.questions.includes(newQuestion._id) || userResponse[1].wrongAnswers.questions.includes(newQuestion._id)) && probedQuestions < this.props.questions.length) {
                        newQuestion = this.props.getQuestion();
                        probedQuestions += 1;
                    }
    
                    if (userResponse[1].correctAnswers.questions.includes(newQuestion._id) || userResponse[1].wrongAnswers.questions.includes(newQuestion._id)) {
                        return userService.updateUser(this.state.user._id, "remainingQuestions", false)
                            .then((updatedUser) => {
                                this.setState({ question: null });
                            })
                    }
                    else {
                        this.setState({ question: newQuestion })
                    }
                }
                else if (userResponse[1].correctAnswers.questions) {
                    while (userResponse[1].correctAnswers.questions.incudes(newQuestion._id) && probedQuestions < this.props.questions.length) {
                        newQuestion = this.props.getQuestion();
                        probedQuestions += 1;
                    }

                    if (userResponse[1].correctAnswers.questions.includes(newQuestion._id)) {
                        return userService.updateUser(this.state.user._id, "remainingQuestions", false)
                            .then((updatedUser) => {
                                this.setState({ question: null });
                            })
                    }
                    else {
                        this.setState({ question: newQuestion })
                    }
                }
                else if (userResponse[1].wrongAnswers.questions) {
                    while (userResponse[1].wrongAnswers.questions.incudes(newQuestion._id) && probedQuestions < this.props.questions.length) {
                        newQuestion = this.props.getQuestion();
                        probedQuestions += 1;
                    }

                    if (userResponse[1].wrongAnswers.questions.includes(newQuestion._id)) {
                        return userService.updateUser(this.state.user._id, "remainingQuestions", false)
                            .then((updatedUser) => {
                                this.setState({ question: null });
                            })
                    }
                    else {
                        this.setState({ question: newQuestion })
                    }
                }
                else {
                    this.setState({ question: newQuestion })
                }
            })
            .catch((err) => console.log(err));
    }

    componentDidMount() {
        authService.getUser()
            .then((user) => {
                if (user.remainingQuestions === true) {
                    this.setState({ user, question: this.props.getQuestion() });
                }
                else {
                    this.setState({ user, question: null });
                }
            })
            .catch((err) => console.log(err));
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.question !== this.state.question) {
            authService.getUser()
                .then((user) => {
                    this.setState({ user })
                })
                .catch((err) => console.log(err));
        }
    }

    render() {
        console.log(this.props)
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
                {this.state.question === null &&
                    <p>No queden més preguntes</p>
                }
            </div>          
        )
    }
}

export default QuestionBody;