import React from 'react';

const pictures = [
    "https://cf.bstatic.com/images/hotel/max1024x768/101/101413777.jpg", 
    "https://lh3.googleusercontent.com/proxy/dLcGSacRycreBAjsKofq_hCCdmQKAvB0dTbgeg3xgbkdSFVijJJfXOU9JBwOyZUPuax75407moRrhme6j-zR8EVw2ZOET522qCl5AsGFKCMT_nMIQAzlpDk-hDHBy3J29ws", 
    "https://q-xx.bstatic.com/xdata/images/hotel/max500/134901935.jpg?k=05a3066c1e77213dda0bcf52b30be4eb7238cf94225026054b6b4bc8765e7503&o="
]

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePictureIndex: 0,
            intervalId: "",
        }
        this.handlePictures = this.handlePictures.bind(this);
    }

    handlePictures() {
        if (this.state.activePictureIndex === 2) {
            this.setState({ activePictureIndex: 0})
          }
        else {
            this.setState((prevState) => ({
                activePictureIndex: prevState.activePictureIndex + 1
            }));
        }
    }

    componentDidMount() {
        this.setState({intervalId: setInterval(this.handlePictures, 2500)})
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }
    
    render() {
        return (
            <div>
                <img src={pictures[this.state.activePictureIndex]} height="200" width="300"/>
            </div>
        )        
    }
}

export default Carousel;