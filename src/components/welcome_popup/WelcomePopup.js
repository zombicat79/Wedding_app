import React from 'react';
import userService from '../../services/user-service';
import { clearScreen } from './../../functions/common';

import SubPopup1 from './SubPopup1';
import SubPopup2 from './SubPopup2';
import SubPopup3 from './SubPopup3';
import SubPopup4 from './SubPopup4';
import SadEnding from './SadEnding';
import HappyEnding from './HappyEnding';

const styles = {
    div: {
        color: "green"
    }
}

class WelcomePopup extends React.Component {
    state = {
        popupStage: 1
    }

    handleStages = (popupSteps) => {
        if (typeof popupSteps === "number") {
            this.setState((prevState) => {
                return {popupStage: prevState.popupStage + popupSteps}
            });
        }
        else {
            this.setState({ popupStage: popupSteps })
        }
    }

    handleResponses = (event) => {
        const { name, value } = event.target;

        if (name === "attending" && value === "false") {
            this.setState({ popupStage: "sad ending" });
        }
        else {
            userService.updateUser(this.props.user._id, name, value);
        }
    }

    closePopup = () => {
        this.props.handlePopupStatus(false);
        clearScreen();
    }
    
    render() {
        return (
            <div>
                <div>
                    <div>
                        <p>1</p>
                    </div>
                    <div>
                        <p>2</p>
                    </div>
                    <div>
                        <p>3</p>
                    </div>
                    {this.props.user.kids.length > 0 && <div>
                        <p>4</p>
                    </div>
                    }
                </div>
                {this.state.popupStage === 1 && <SubPopup1 language={this.props.language} user={this.props.user} 
                                                handleStages={this.handleStages} handleResponses={this.handleResponses} />}
                {this.state.popupStage === 2 && <SubPopup2 language={this.props.language} user={this.props.user} 
                                                handleStages={this.handleStages} handleResponses={this.handleResponses} />}
                {this.state.popupStage === 3 && <SubPopup3 language={this.props.language} user={this.props.user} 
                                                handleStages={this.handleStages} handleResponses={this.handleResponses} />}
                {this.state.popupStage === 4 && <SubPopup4 language={this.props.language} user={this.props.user} 
                                                handlePopupStatus={this.props.handlePopupStatus} handleResponses={this.handleResponses}
                                                handleStages={this.handleStages} />}
                {this.state.popupStage === "sad ending" && <SadEnding language={this.props.language} closePopup={this.closePopup} />}
                {this.state.popupStage === "happy ending" && <HappyEnding language={this.props.language} closePopup={this.closePopup} />}
            </div>
        )
    }
}

export default WelcomePopup;