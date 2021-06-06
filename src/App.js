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
      userIsLoggedIn: true, // *** needs to be updated dynamically once the backend is created. ***
      user: "Josele", // *** needs to be updated dynamically once the backend is created. ***
      gameStatus: "new",
      rightAnswers: 2, // *** needs to be updated dynamically once the backend is created. ***
      points: 100, // *** needs to be updated dynamically once the backend is created. ***
      productsInCart: false, // *** needs to be updated dynamically once the backend is created. ***
      cartItems: {} // *** needs to be updated dynamically once the backend is created. ***
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

  componentDidUpdate(prevProps, prevState) {
    /* Code below compares the present presence of items in the cart with the presence of items at the 
    moment immediately before. If the comparison establishes the cart has just been emptied, then setState
    is called and the cart labelled as empty (pending: try to abstract lengthy chunk of code into a function) */
    
    let cartCheck = [];
    for(const item in this.state.cartItems) {
      if (this.state.cartItems[item] === 0) {
        cartCheck.push(0);
      }
      else {
        cartCheck.push(1);
      }
    }

    let prevCartCheck = [];
    for (const item in prevState.cartItems) {
      if (prevState.cartItems[item] === 0) {
        prevCartCheck.push(0);
      }
      else {
        prevCartCheck.push(1);
      }      
    }

    const reducedCheck = cartCheck.reduce((acc, current) => acc + current);
    const reducedPrevCheck = prevCartCheck.reduce((acc, current) => acc + current, 0);

    if (reducedCheck === 0 && reducedPrevCheck === 1) {
      this.setState({ productsInCart: false });
    }
  }
  
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
            <Route exact path="/" render={(props) => <Home {...props} isLoggedIn={this.state.userIsLoggedIn} />} />
            <Route exact path="/info" render={(props) => <Info {...props} />} />
            <Route exact path="/quiz" render={(props) => (<Quiz state={this.state} />)}/>
            <Route path="/ingame/:id" render={(props) => (<InGame {...props } toggleGame={this.handleGameStatus} />)} />
            <Route path="/gamestats/:id" render={(props) => <GameStats {...props} />} component={GameStats}/>
            <Route exact path="/market" render={(props) => <Market {...props} addToCart={this.addToCart} cartItems={this.state.cartItems} />} />
            <Route exact path="/checkout" render={(props) => <Checkout {...props} cartItems={this.state.cartItems} 
              addToCart={this.addToCart} removeFromCart={this.removeFromCart} />} />
            <Route exact path="/requests" render={(props) => <Requests {...props} />} />
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
