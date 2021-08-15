import React from 'react';

class Countdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            daysLeft: 0,
            endDots: ""
        }
    };

    // Manages day countdown animated dots 
    handleDots = () => {
        this.dotIncrement = setInterval(() => {
            this.setState((prevState) => {
                if (prevState.endDots === "...") {
                    return { endDots: "" };
                }
                else {
                    return { endDots: prevState.endDots + "." };
                }
            })
        }, 1000)
    };

    componentDidMount() {
        // Determines remaining days countdown on load
        const weddingDate = new Date(2022, 5, 11, 12, 0, 0, 0)
        const presentDate = new Date();

        const remainingDays = ((weddingDate - presentDate) / 3600000) / 24;
        // *** JS returns the difference between dates in milliseconds, which then has to be translated to the desired time unit. ***
        this.setState({ daysLeft: Math.round(remainingDays) });

        this.handleDots();
    };

    // Clears countdown's dot animation upon leaving the page 
    componentWillUnmount() {
        clearInterval(this.dotIncrement);
    }

    render() {
        return (
            <div>
                {this.props.lang === "english" && <h2>{this.state.daysLeft} days left until the wedding{this.state.endDots}</h2>}
                {this.props.lang === "catalan" && <h2>Queden {this.state.daysLeft} dies fins al casament{this.state.endDots}</h2>}
                {this.props.lang === "spanish" && <h2>Faltan {this.state.daysLeft} días para la boda{this.state.endDots}</h2>}
            </div>
        )
    };
};

export default Countdown;