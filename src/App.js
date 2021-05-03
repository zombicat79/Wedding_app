import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HeaderNavbar from './components/header_navbar/HeaderNavbar';
import Countdown from './components/countdown/Countdown';
import LangSelect from './components/language_selector/LangSelect';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      language: ""
    }
    this.handleLanguage = this.handleLanguage.bind(this);
  }

  handleLanguage(event) {
    const { name } = event.target;
    this.setState({ language: name })
  }
  
  render() {
    return (
      <div>
        <HeaderNavbar lang={this.state.language} />
        <Countdown lang={this.state.language} />
        <LangSelect handleLang={this.handleLanguage} />
      </div>
    )
  }
}

export default App;
