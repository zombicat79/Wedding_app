import React from 'react';
import { LangContext } from './../../context/lang-context';

import Countdown from './../../components/countdown/Countdown';
import ActivityMenu from './../../components/activity_menu/ActivityMenu';

function Home(props) {
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
                            <h1>Vine a celebrar amb nosaltres!</h1>
                        </section>
                        }
                        {!props.isLoggedIn &&
                        <section>
                            <p>Please make sure you enter your code to access the app</p>
                        </section>
                        }
                        <section>
                            <ActivityMenu />
                        </section>
                    </main>
                )
            }}
        </LangContext.Consumer>
    )
}

export default Home;