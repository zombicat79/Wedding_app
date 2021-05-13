import React from 'react';
import { LangContext } from './../../context/lang-context';

import Countdown from './../../components/countdown/Countdown';
import ActivityMenu from './../../components/activity_menu/ActivityMenu';

function Home(props) {
    // page needs to be complete with final texts and conditional rendering corresponding selected language.
    // First text line must greet the user dynamically
    return (
        <LangContext.Consumer>
            {(value) => {
                return (
                    <main>
                        <section>
                            <h1>Ens casem!</h1>
                        </section>
                        <Countdown lang={value.properties.language} />
                        {props.isLoggedIn && 
                        <section>
                            <article>
                                <h1>Vine a celebrar amb nosaltres!</h1>
                            </article>
                            <article>
                                <ActivityMenu />
                            </article>
                        </section>
                        }
                        {!props.isLoggedIn &&
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

export default Home;