import React from 'react';
import { LangContext } from './../../context/lang-context';

const Unlogged = (props) => {
    return (
        <LangContext.Consumer>
            {(value) => {
                const text = {
                    greeting: {
                        cat: "Benvinguts a la Festa Major de la Cristina i del David",
                        esp: "Bienvenidos a la Fiesta Mayor de Cristina y David",
                        eng: "Welcome to Cristina & David's Party of a Lifetime"
                    },
                    prompt: {
                        cat: "Si sou aquí és segur que us coneixem i us estimem, però necessitem que us identifiqueu.",
                        esp: "Si habéis llegado hasta aquí es seguro que os conocemos y os queremos, pero necesitamos que os identfiquéis",
                        eng: "If you got here we are bound to know you and love you, but we require you to identify yourself",
                    },
                    form: {
                        cat: {
                            username: "Nom d'usuari",
                            password: "Contrasenya",
                            button: "Deixa'm entrar!"
                        },
                        esp: {
                            username: "Nombre de usuario",
                            password: "Contraseña",
                            button: "Déjame entrar!"
                        },
                        eng: {
                            username: "Username",
                            password: "Password",
                            button: "Let me in!"
                        }
                    }
                };
                
                return (
                    <main>
                        <section>
                            <img src="https://xarxanet.org/sites/default/files/styles/xn17_2x2/public/festa_major_santperereus.jpeg?itok=3eWllFjr" width="400" alt="Logo festa major" />
                            <h1>
                                {value.properties.language === "catalan" ? text.greeting.cat : value.properties.language === "spanish" ? text.greeting.esp : text.greeting.eng}
                            </h1>
                            <p>
                                {value.properties.language === "catalan" ? text.prompt.cat : value.properties.language === "spanish" ? text.prompt.esp : text.prompt.eng}  
                            </p>
                        </section>
                        <section>
                            <form>
                                <label htmlFor="username-input"><strong>Nom d'usuari</strong></label>
                                <input id="username-input" type="text" name="username" />

                                <label htmlFor="password-input"><strong>Contrasenya</strong></label>
                                <input id="password-input" type="password" name="password" />

                                <input type="submit" value="Entra" />
                            </form> 
                        </section>
                    </main>                    
                )
            }}
        </LangContext.Consumer>
    )
}

export default Unlogged;