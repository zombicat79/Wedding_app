import React from 'react';

const LangContext = React.createContext();

class LangProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            language: "spanish"
        }
        this.handleLanguage = this.handleLanguage.bind(this);
    }

    handleLanguage(event) {
        const { name } = event.target;
        this.setState({ language: name });
    }

    render() {
        const providerTools = {
            properties: this.state,
            methods: this.handleLanguage
        }
        return (
            <LangContext.Provider value={providerTools}>
                {this.props.children}
            </LangContext.Provider>
        )
    }
}

export { LangContext, LangProvider};