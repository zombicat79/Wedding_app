import React from 'react';
import { LangContext } from './../../context/lang-context';
import authService from './../../services/auth-service';

import ActivityMenu from './../../components/activity_menu/ActivityMenu';

class Requests extends React.Component {
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
            <LangContext.Consumer>
                {(value) => {
                    return (
                        <main>
                            <h1>This is the requests page</h1>
                            <ActivityMenu {...this.props} />
                        </main>
                    )
                }}
            </LangContext.Consumer>
        )        
    }
}

export default Requests;