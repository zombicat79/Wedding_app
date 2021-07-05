import React from 'react';
import { LangContext } from './../../context/lang-context';
import authService from './../../services/auth-service';

import catalan from './../../images/icons/catalan.jpeg';
import spanish from './../../images/icons/spanish.jpeg';
import english from './../../images/icons/english.png';
import rings from './../../images/icons/rings.png';

class Unlogged extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            language: "",
            message: ""
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { username, password } = this.state;

        authService.login(username, password, this.state.language)
            .then((response) => {
                if (response.message) {
                    this.setState({ message: response.message });
                }
                else {
                    console.log(response);
                }
            })
            .catch((err) => console.log(err));
    }

    handleLanguage = (event) => {
        const { name } = event.target;
        this.setState({ language: name });
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
                    const text = {
                        greeting: {
                            cat: "Benvinguts a la Festa Major de la Cristina i del David",
                            esp: "Bienvenidos a la Fiesta Mayor de Cristina y David",
                            eng: "Welcome to Cristina & David's Party of a Lifetime"
                        },
                        prompt: {
                            cat: "Si sou aquí segur que és perquè us coneixem i us estimem, però tot i així necessitem que us identifiqueu.",
                            esp: "Si habéis llegado hasta aquí seguro que es porque os conocemos y os queremos, pero necesitamos que os identfiquéis",
                            eng: "If you ended up here surely it is because we know you and love you, but we still require you to identify yourself",
                        },
                        form: {
                            cat: {
                                username: "Nom d'usuari: ",
                                password: "Contrasenya: ",
                                button: "Deixeu-me entrar!"
                            },
                            esp: {
                                username: "Nombre de usuario: ",
                                password: "Contraseña: ",
                                button: "Dejadme entrar!"
                            },
                            eng: {
                                username: "Username: ",
                                password: "Password: ",
                                button: "Let me in!"
                            }
                        }
                    };
                    
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
                                <div>
                                    <h1>
                                        {language === "catalan" ? text.greeting.cat : language === "spanish" ? text.greeting.esp : text.greeting.eng}
                                    </h1>
                                    <p>
                                        {language === "catalan" ? text.prompt.cat : language === "spanish" ? text.prompt.esp : text.prompt.eng}  
                                    </p>  
                                </div>
                            </section>
                            <section>
                                <form onSubmit={(e) => this.handleSubmit(e)}>
                                    <label htmlFor="username-input">
                                        <strong>{language === "catalan" ? text.form.cat.username : language === "spanish" ? text.form.esp.username : text.form.eng.username}</strong>
                                    </label>
                                    <input id="username-input" type="text" name="username" 
                                           onChange={(e) => this.handleChange(e)} value={this.state.username} />
    
                                    <label htmlFor="password-input">
                                        <strong>{language === "catalan" ? text.form.cat.password : language === "spanish" ? text.form.esp.password : text.form.eng.password} </strong>
                                    </label>
                                    <input id="password-input" type="password" name="password" 
                                           onChange={(e) => this.handleChange(e)} value={this.state.password} />
    
                                    <input type="submit" value={language === "catalan" ? text.form.cat.button : language === "spanish" ? text.form.esp.button : text.form.eng.button}  />
                                </form>
                                {this.state.message && <p>{this.state.message}</p>}
                            </section>
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