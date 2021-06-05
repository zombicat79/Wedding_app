import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HeaderNavbar from './components/header_navbar/HeaderNavbar';
import FooterNavbar from './components/footer_navbar/FooterNavbar';
import Home from './pages/home/Home';
import Info from './pages/info/Info';
import Market from './pages/market/Market';
import Quiz from './pages/quiz/Quiz';
import InGame from './pages/quiz/InGame';
import GameStats from './pages/quiz/GameStats';
import Requests from './pages/requests/Requests';
import Checkout from './pages/checkout/Checkout';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userIsLoggedIn: true, // needs to be updated dynamically once the backend is created.
      user: "Josele",
      gameStatus: "new",
      rightAnswers: 2,
      points: 100,
      productsInCart: false,
      cartItems: {}
    }
    this.handleGameStatus = this.handleGameStatus.bind(this);
    this.handleCartStatus = this.handleCartStatus.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  handleGameStatus() {
    this.setState({ gameStatus: "finished"});
    setTimeout(() => this.setState({ gameStatus: "new"}), 10000);
  }

  handleCartStatus(status) {
    this.setState({ productsInCart: status });
  }

  addToCart(item) {
    this.handleCartStatus(true);
    if (!this.state.cartItems[item]) {
      this.setState({ cartItems: {...this.state.cartItems, [item]: 1}}); 
    }
    else {
      this.setState((prevState) => {
        return { cartItems: {...this.state.cartItems, [item]: prevState.cartItems[item] + 1} };
      });
    }
  }

  removeFromCart(item, reset) {
    if (reset === undefined && this.state.cartItems[item] !== 0) {
      this.setState((prevState) => {
        return { cartItems: {...this.state.cartItems, [item]: prevState.cartItems[item] - 1} }
      })      
    }
    else {
      this.setState({ cartItems: {...this.state.cartItems, [item]: 0}});
    }
  }

  /* componentDidUpdate() {
    let check = []
    for(const key in this.state.cartItems) {
      if (this.state.cartItems[key] === 0) {
        check.push(0);
      }
      else {
        check.push(1);
      }
    }
    check.reduce((acc, current) => acc + current) === 0 ? this.handleCartStatus(false) : console.log("hello");
  } */
  
  render() {
    return (
      <>
        {this.state.userIsLoggedIn && 
        <header>
          <nav>
            <HeaderNavbar productsInCart={this.state.productsInCart} />
          </nav>
        </header>
        }
        <>
          <Switch>
            <Route exact path="/" render={(props) => (<Home isLoggedIn={this.state.userIsLoggedIn} />)} />
            <Route exact path="/info" component={Info} />
            <Route exact path="/quiz" render={(props) => (<Quiz state={this.state} />)}/>
            <Route path="/ingame/:id" render={(props) => (<InGame {...props } toggleGame={this.handleGameStatus} />)} />
            <Route path="/gamestats/:id" render={(props) => <GameStats {...props} />} component={GameStats}/>
            <Route exact path="/market" render={(props) => <Market {...props} addToCart={this.addToCart} cartItems={this.state.cartItems} />} />
            <Route exact path="/checkout" render={(props) => <Checkout {...props} cartItems={this.state.cartItems} 
              addToCart={this.addToCart} removeFromCart={this.removeFromCart} />} />
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
