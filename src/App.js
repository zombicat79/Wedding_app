import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HeaderNavbar from './components/header_navbar/HeaderNavbar';
import FooterNavbar from './components/footer_navbar/FooterNavbar';
import Home from './pages/home/Home';
import Info from './pages/info/Info';
import Market from './pages/market/Market';
import Quiz from './pages/quiz/Quiz';
import Requests from './pages/requests/Requests';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userIsLoggedIn: true // needs to be updated dynamically once the backend is created.
    }
  }
  
  render() {
    return (
      <>
        {this.state.userIsLoggedIn && 
        <header>
          <nav>
            <HeaderNavbar />
          </nav>
        </header>
        }
        <>
          <Switch>
            <Route exact path="/" render={(props) => (<Home isLoggedIn={this.state.userIsLoggedIn} />)} />
            <Route exact path="/info" component={Info} />
            <Route exact path="/quiz" component={Quiz} />
            <Route exact path="/market" component={Market} />
            <Route exact path="/requests" component={Requests} />
          </Switch>
        </>
        {this.state.userIsLoggedIn && 
        <footer>
          <nav>
            <FooterNavbar />
          </nav>
        </footer>
        }
      </>
    )
  }
}

export default App;
