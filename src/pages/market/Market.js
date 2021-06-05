import React from 'react';

import ProductOffer from './../../components/market_components/product_offer/ProductOffer';
import PurchaseSummary from './../../components/market_components/purchase_summary/PurchaseSummary';

function Market(props) {    
    return (
        <main>
            <h1>This is the market page</h1>
            <section>
                <ProductOffer addItem={props.addToCart} />
            </section>
            <section>
                <PurchaseSummary {...props} />
            </section>
        </main>
    )
}

export default Market;