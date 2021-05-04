import React from 'react';

import Countdown from './../../components/countdown/Countdown';
import ActivityMenu from './../../components/activity_menu/ActivityMenu';

function Home(props) {
    return (
        <main>
            <section>
                <h1>Ens casem!</h1>
            </section>
            <Countdown lang={props.lang} />
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
}

export default Home;