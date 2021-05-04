import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HeaderNavbar from './components/header_navbar/HeaderNavbar';
import FooterNavbar from './components/footer_navbar/FooterNavbar';
import Countdown from './components/countdown/Countdown';
import LangSelect from './components/language_selector/LangSelect';
import Home from './pages/home/Home';
import Info from './pages/info/Info';
import Market from './pages/market/Market';
import Quiz from './pages/quiz/Quiz';
import Requests from './pages/requests/Requests';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      language: "catalan",
      userIsLoggedIn: true // needs to be updated dynamically once the backend is created.
    }
    this.handleLanguage = this.handleLanguage.bind(this);
  }

  handleLanguage(event) {
    const { name } = event.target;
    this.setState({ language: name })
  }
  
  render() {
    return (
      <>
        {this.state.userIsLoggedIn && 
        <header>
          <nav>
            <HeaderNavbar handleLang={this.handleLanguage} />
          </nav>
        </header>
        }
        <>
          <Switch>
            <Route exact path="/" render={(props) => (<Home lang={this.state.language} isLoggedIn={this.state.userIsLoggedIn} />)} />
            <Route exact path="/info" component={Info} />
            <Route exact path="/quiz" component={Quiz} />
            <Route exact path="/market" component={Market} />
            <Route exact path="/requests" component={Requests} />
          </Switch>
        </>
        {this.state.userIsLoggedIn && 
        <footer>
          <nav>
            <FooterNavbar lang={this.state.language} />
          </nav>
        </footer>
        }
      </>
    )
  }
}

export default App;
