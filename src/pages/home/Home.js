import React from 'react';
import { LangContext } from './../../context/lang-context';
import authService from './../../services/auth-service';

import Countdown from './../../components/countdown/Countdown';
import ActivityMenu from './../../components/activity_menu/ActivityMenu';
import WelcomePopup from './../../components/welcome_popup/WelcomePopup';

class Home extends React.Component {
    // page needs to be complete with final texts and conditional rendering corresponding selected language.
    // First text line must greet the user dynamically
    componentDidMount() {
        if (this.props.user.logins > 1) {
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
    
    render() {
            return (
            <LangContext.Consumer>
                {(value) => {
                    return (
                        <main>
                            <section>
                                <h1>Ens casem!</h1>
                            </section>
                            <Countdown lang={value.properties.language} />
                            <section>
                                <article>
                                    <h1>Vine a celebrar amb nosaltres!</h1>
                                </article>
                                <article>
                                    <ActivityMenu {...this.props} />
                                </article>
                            </section>
                            {this.props.user.logins === 1 && 
                             this.props.popupIsActive &&
                            <dialog open>
                                <WelcomePopup {...this.props} language={value.properties.language} />
                            </dialog>
                            }
                        </main>
                    )
                }}
            </LangContext.Consumer>
        )
    }
}

export default Home;