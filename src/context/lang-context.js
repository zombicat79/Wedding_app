import React from 'react';

const LangContext = React.createContext();

class LangProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            language: "nordic"
        }
    }

    render() {
        return (
            <LangContext.Provider value={this.state}>
                {this.props.children}
            </LangContext.Provider>
        )
    }
}

export { LangContext, LangProvider};