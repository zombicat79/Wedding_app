import React from 'react';

import SubPopup1 from './SubPopup1';
import SubPopup2 from './SubPopup2';
import SubPopup3 from './SubPopup3';

const styles = {
    div: {
        color: "green"
    }
}

// import SubPopup 2 & 3 and complete them!
// create state to manage SubPopup flow
// checkbox SubPopup inputs must be "radio buttons"!

class WelcomePopup extends React.Component {
    state = {
        popupStage: 1,
        attending: "",
    }

    handleStages = (popupSteps) => {
        this.setState((prevState) => {
            return {popupStage: prevState.popupStage + popupSteps}
        });
    }

    handleResponses = (event) => {
        const { name, value } = event.target;
        console.log(name);
        console.log(value);
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
                    {this.props.user.kids.length > 0 && <div>
                        <p>3</p>
                    </div>
                    }
                </div>
                {this.state.popupStage === 1 && <SubPopup1 language={this.props.language} user={this.props.user} 
                                                handleStages={this.handleStages} handleResponses={this.handleResponses} />}
                {this.state.popupStage === 2 && <SubPopup2 language={this.props.language} user={this.props.user} handleStages={this.handleStages} />}
                {this.state.popupStage === 3 && <SubPopup3 language={this.props.language} user={this.props.user} />}
            </div>
        )
    }
}

export default WelcomePopup;