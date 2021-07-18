import React from 'react';
import { LangContext } from './../../context/lang-context';
import authService from './../../services/auth-service';
import productService from './../../services/product-service';
import userService from './../../services/user-service';

import ProductOffer from './../../components/market_components/product_offer/ProductOffer';
import PurchaseSummary from './../../components/market_components/purchase_summary/PurchaseSummary';

class Market extends React.Component {    
    componentDidMount() {
        authService.getUser()
          .then((loggedInUser) => {
            if (!loggedInUser._id) {
              this.props.history.replace("/");
            }
          })
          .catch((err) => console.log(err));

        productService.getAll()
        .then((response) => {
            this.props.updateProducts(response)
        })
        .catch((err) => console.log(err));
    }

    /*componentWillUnmount() {
        userService.addToCart(this.props.user._id, this.props.cartItems);
    }*/
    
    render() {
        return (
            <LangContext.Consumer>
                {(value) => {
                    return (
                        <main>
                            <h1>This is the market page</h1>
                            <section>
                                <ProductOffer addItem={this.props.addToCart} language={value.properties.language} 
                                              products={this.props.products} />
                            </section>
                            <section>
                                <PurchaseSummary {...this.props} products={this.props.products} 
                                                 language={value.properties.language} />
                            </section>
                        </main>
                    )
                }}
            </LangContext.Consumer>
        )        
    }
};

export default Market;