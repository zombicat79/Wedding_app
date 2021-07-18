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
        authService.getUser()
          .then((loggedInUser) => {
            if (loggedInUser._id) {
              this.props.handleUsers(loggedInUser);
              this.props.handleCart(loggedInUser.productsInCart);
              const totalItemsInCart = Object.values(this.state.user.productsInCart).reduce((acc, current) => acc + current, 0);
              this.props.handleCartStatus(totalItemsInCart === 0 ? false : true)
            }
            else {
              this.props.handleUsers(null);
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
                                <WelcomePopup {...this.props} />
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