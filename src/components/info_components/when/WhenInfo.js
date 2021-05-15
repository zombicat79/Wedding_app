import React from 'react';

import Countdown from './../../countdown/Countdown';

const WhenInfo = (props) => {
    return (
        <article>
            <h1>El casament tindrà lloc l'11 de juny de 2022</h1>
            <Countdown lang={props.lang} />
        </article>
    )
}

export default WhenInfo