import React from 'react';
import { LangContext } from './../../context/lang-context';
import { clearScreen } from './../../functions/common';
import authService from './../../services/auth-service';

import rings from './../../images/icons/rings.png';

import Countdown from './../../components/countdown/Countdown';
import ActivityMenu from './../../components/activity_menu/ActivityMenu';
import WelcomePopup from './../../components/welcome_popup/WelcomePopup';

import texts from './home.texts';

class Home extends React.Component {
    // page needs to be complete with final texts and conditional rendering corresponding selected language.
    // First text line must greet the user dynamically
    componentDidMount() {
        if (this.props.user.logins >= 2) {
            this.props.handlePopupStatus(false);
            this.props.handleCart(this.props.user.productsInCart)
            const totalItemsInCart = Object.values(this.props.user.productsInCart).reduce((acc, current) => acc + current, 0);
            this.props.handleCartStatus(totalItemsInCart === 0 ? false : true);
        }
        else {
            const root = document.getElementById("root");
            root.style.position = "fixed";
            root.style.height = "100%";
            root.style.width = "100%";
            root.style.color = "grey"
            root.style.backgroundColor = "rgb(169, 169, 169)";

            const rootLinks = document.getElementsByClassName("link")
            for (let el of rootLinks) {
                el.style.textDecoration = "none";
                el.style.color = "grey";
            }

            this.props.handlePopupStatus(true);
            this.props.handleCart(this.props.user.productsInCart)
            const totalItemsInCart = Object.values(this.props.user.productsInCart).reduce((acc, current) => acc + current, 0);
            this.props.handleCartStatus(totalItemsInCart === 0 ? false : true);
        }
    }

    componentWillUnmount() {
        clearScreen();
    }
    
    render() {
            return (
            <LangContext.Consumer>
                {(value) => {
                    return (
                        <main>
                            {this.props.popupIsActive &&
                            <dialog open>
                                <WelcomePopup {...this.props} language={value.properties.language} 
                                              handlePopupStatus={this.props.handlePopupStatus} 
                                              handleUsers={this.props.handleUsers} />
                            </dialog>
                            }
                            <section>
                                <h1>{value.properties.language === "catalan" ? texts.mainTitle.cat : value.properties.language === "spanish" ? texts.mainTitle.esp : texts.mainTitle.eng}</h1>
                                <img src={rings} width="300" />
                                <h2>{value.properties.language === "catalan" ? texts.prompt.cat : value.properties.language === "spanish" ? texts.prompt.esp : texts.prompt.eng}</h2>
                            </section>
                            <section>
                                <article>
                                    <p>
                                        {value.properties.language === "catalan" ? texts.intro.cat : value.properties.language === "spanish" ? texts.intro.esp : texts.intro.eng} 
                                        <strong>{this.props.user.casualName}{","}</strong>
                                    </p>
                                    <p>{value.properties.language === "catalan" ? texts.intro2.cat : value.properties.language === "spanish" ? texts.intro2.esp : texts.intro2.eng}</p>
                                    <p>{value.properties.language === "catalan" ? texts.intro3.cat : value.properties.language === "spanish" ? texts.intro3.esp : texts.intro3.eng}</p>
                                    <p>{value.properties.language === "catalan" ? texts.intro4.cat : value.properties.language === "spanish" ? texts.intro4.esp : texts.intro4.eng}</p>
                                </article>
                            </section>
                            <section>
                                <Countdown lang={value.properties.language} />
                                <div>
                                    <ActivityMenu {...this.props} lang={value.properties.language} />
                                </div>
                            </section>
                        </main>
                    )
                }}
            </LangContext.Consumer>
        )
    }
}

export default Home;