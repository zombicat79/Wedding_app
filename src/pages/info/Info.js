import React from 'react';
import { LangContext } from './../../context/lang-context';

import WhenInfo from './../../components/info_components/when/WhenInfo';
import WhereInfo from './../../components/info_components/where/WhereInfo';
import HowInfo from './../../components/info_components/how/HowInfo';

class Info extends React.Component {
    // page needs to be complete with final texts and conditional rendering corresponding selected language.
    constructor(props) {
        super(props);
        this.state = {
            activeButton: ""
        }
        this.handleButtons = this.handleButtons.bind(this);
    }

    handleButtons(event) {
        const { name } = event.target;
        if (name === this.state.activeButton) {
            this.setState({ activeButton: "" })
        }
        else {
            this.setState({ activeButton: name })
        }
    }

    render() {
        const showContent = this.state.activeButton

        return(
            <LangContext.Consumer>
                {(value) => {
                    return (
                        <main>
                            <section>
                                <button name="when" onClick={(e) => this.handleButtons(e)}>Quan</button>
                                <button name="where" onClick={(e) => this.handleButtons(e)}>On</button>
                                <button name="how" onClick={(e) => this.handleButtons(e)}>Com</button>
                            </section>
                            <section>
                                { showContent === "when" && <WhenInfo lang={value.properties.language} />}
                                { showContent === "where" && <WhereInfo />}
                                { showContent === "how" && <HowInfo />}
                            </section>
                        </main>
                    )
                }}
            </LangContext.Consumer>
        )       
    }
}

export default Info;