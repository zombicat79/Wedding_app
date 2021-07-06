import React from 'react';
import { LangContext } from './../../context/lang-context';
import authService from './../../services/auth-service';

import catalan from './../../images/icons/catalan.jpeg';
import spanish from './../../images/icons/spanish.jpeg';
import english from './../../images/icons/english.png';
import rings from './../../images/icons/rings.png';

import texts from './../../texts/texts';

class Unlogged extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            language: "",
            display: false,
            message: ""
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (event, handleGlobalLanguage) => {
        event.preventDefault()
        const { username, password } = this.state;

        authService.login(username, password, this.state.language)
            .then((response) => {
                if (response.message) {
                    this.setState({ message: response.message });
                }
                else {
                    handleGlobalLanguage(this.state.language);
                    this.props.handleUsers(response);
                    this.props.history.replace("/");
                }
            })
            .catch((err) => console.log(err));
    }

    handleLanguage = (event) => {
        const { name } = event.target;
        this.setState({ language: name, display: true });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.message) {
            this.setState({ message: "" });
        }
    }

    render() {
        return (
            <LangContext.Consumer>
                {(value) => {
                    const { language } = this.state;
                    const handleGlobalLanguage = value.methods;
                    
                    return (
                        <main>
                            <section>
                                <div>
                                    <img src="https://xarxanet.org/sites/default/files/styles/xn17_2x2/public/festa_major_santperereus.jpeg?itok=3eWllFjr" width="400" alt="Logo festa major" />  
                                </div>
                                <div>
                                    <img src={catalan} onClick={(e) => this.handleLanguage(e)} width="80" alt="Catalan flag" name="catalan" />
                                    <img src={spanish} onClick={(e) => this.handleLanguage(e)} width="50" alt="Spanish flag" name="spanish" />
                                    <img src={english} onClick={(e) => this.handleLanguage(e)} width="44" alt="UK flag" name="english" />
                                </div>
                                { this.state.display === true &&
                                <div>
                                    <h1>
                                        {language === "catalan" ? texts.unloggedGreeting.cat : language === "spanish" ? texts.unloggedGreeting.esp : texts.unloggedGreeting.eng}
                                    </h1>
                                    <p>
                                        {language === "catalan" ? texts.unloggedPrompt.cat : language === "spanish" ? texts.unloggedPrompt.esp : texts.unloggedPrompt.eng}  
                                    </p>
                                    <p>
                                        {language === "catalan" ? texts.unloggedInstructions.cat : language === "spanish" ? texts.unloggedInstructions.esp : texts.unloggedInstructions.eng}  
                                    </p>  
                                </div>
                                }
                            </section>
                            { this.state.display === true &&
                            <section>
                                <form onSubmit={(e) => this.handleSubmit(e, handleGlobalLanguage)}>
                                    <label htmlFor="username-input">
                                        <strong>{language === "catalan" ? texts.unloggedForm.cat.username : language === "spanish" ? texts.unloggedForm.esp.username : texts.unloggedForm.eng.username}</strong>
                                    </label>
                                    <input id="username-input" type="text" name="username" 
                                           onChange={(e) => this.handleChange(e)} value={this.state.username} />
    
                                    <label htmlFor="password-input">
                                        <strong>{language === "catalan" ? texts.unloggedForm.cat.password : language === "spanish" ? texts.unloggedForm.esp.password : texts.unloggedForm.eng.password} </strong>
                                    </label>
                                    <input id="password-input" type="password" name="password" 
                                           onChange={(e) => this.handleChange(e)} value={this.state.password} />
    
                                    <input type="submit" value={language === "catalan" ? texts.unloggedForm.cat.button : language === "spanish" ? texts.unloggedForm.esp.button : texts.unloggedForm.eng.button}  />
                                </form>
                                {this.state.message && <p>{this.state.message}</p>}
                            </section>
                            }
                            <section>
                                <div>
                                    <img src={rings} width="100" alt="Wedding rings" />   
                                </div>
                            </section>
                        </main>                    
                    )
                }}
            </LangContext.Consumer>
        )        
    }
};

export default Unlogged;