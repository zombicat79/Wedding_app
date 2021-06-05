import React from 'react';

import PurchaseSummary from './../../components/market_components/purchase_summary/PurchaseSummary';

function Checkout(props) {    
    return (
        <main>
            <PurchaseSummary {...props} />
        </main>
    )
}

export default Checkout;