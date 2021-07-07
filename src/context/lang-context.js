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
        if (event.target) {
            const { name } = event.target;
            this.setState({ language: name }); 
        }
        else {
            this.setState({ language: event });
        }
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

export { LangContext, LangProvider };