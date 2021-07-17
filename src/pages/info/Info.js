import React from 'react';
import { LangContext } from './../../context/lang-context';
import authService from './../../services/auth-service';

import ActivityMenu from './../../components/activity_menu/ActivityMenu';

class Info extends React.Component {
    // page needs to be complete with final texts and conditional rendering corresponding selected language.
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
                            <ActivityMenu {...this.props} lang={value.properties.language}/>
                        </main>
                    )
                }}
            </LangContext.Consumer>
        )        
    }
}

export default Info;