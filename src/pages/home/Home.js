import React from 'react';
import { LangContext } from './../../context/lang-context';
import authService from './../../services/auth-service';

import Countdown from './../../components/countdown/Countdown';
import ActivityMenu from './../../components/activity_menu/ActivityMenu';

class Home extends React.Component {
    // page needs to be complete with final texts and conditional rendering corresponding selected language.
    // First text line must greet the user dynamically
    componentDidMount() {
        authService.getUser()
          .then((loggedInUser) => {
            if (loggedInUser) {
              this.props.handleUsers(loggedInUser);
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
                            {this.props.isLoggedIn && 
                            <section>
                                <article>
                                    <h1>Vine a celebrar amb nosaltres!</h1>
                                </article>
                                <article>
                                    <ActivityMenu {...this.props} />
                                </article>
                            </section>
                            }
                            {!this.props.isLoggedIn &&
                            <section>
                                <p>Please make sure you enter your code to access the app</p>
                            </section>
                            }
                        </main>
                    )
                }}
            </LangContext.Consumer>
        )
    }
}

export default Home;