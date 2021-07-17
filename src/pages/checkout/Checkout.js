import React from 'react';
import authService from './../../services/auth-service';

import PurchaseSummary from './../../components/market_components/purchase_summary/PurchaseSummary';

class Checkout extends React.Component {    
    componentDidMount() {
        authService.getUser()
          .then((loggedInUser) => {
            if (!loggedInUser._id) {
              this.props.history.replace("/");
            }
          })
          .catch((err) => console.log(err));
    }
    
    render() {
        return (
            <main>
                <PurchaseSummary {...this.props} />
            </main>
        )
    }
}

export default Checkout;