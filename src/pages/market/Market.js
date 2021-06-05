import React from 'react';

import ProductOffer from './../../components/market_components/product_offer/ProductOffer';
import PurchaseSummary from './../../components/market_components/purchase_summary/PurchaseSummary';

class Market extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cartItems: {}
        }
        this.addToCart = this.addToCart.bind(this);
    }

    addToCart(item) {
        if (!this.state.cartItems[item]) {
            this.setState({ cartItems: {...this.state.cartItems, [item]: 1}}); 
        }
        else {
            this.setState((prevState) => {
                return { cartItems: {...this.state.cartItems, [item]: prevState.cartItems[item] + 1} };
            });
        }
    }

    render() {
        return (
            <main>
                <h1>This is the market page</h1>
                <section>
                    <ProductOffer addItem={this.addToCart} />
                </section>
                <section>
                    <PurchaseSummary cartItems={this.state.cartItems} />
                </section>
            </main>
        )
    }
}

export default Market;