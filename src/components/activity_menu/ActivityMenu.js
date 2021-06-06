import React from 'react';
import { Link } from 'react-router-dom';

import WhenInfo from './../info_components/when/WhenInfo';
import WhereInfo from './../info_components/where/WhereInfo';
import HowInfo from './../info_components/how/HowInfo';
import FoodRequest from './../requests_components/food_request/FoodRequest';
import AccomodationRequest from './../requests_components/accomodation_request/AccomodationRequest';
import MusicRequest from './../requests_components/music_request/MusicRequest';

class ActivityMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeButton: ""
        }
        this.handleButtons = this.handleButtons.bind(this);
    }

    handleButtons(event) {
        const { name } = event.target;
        if (name === this.state.activeButton) {
            this.setState({ activeButton: "" })
        }
        else {
            this.setState({ activeButton: name })
        }
    }

    render() {
        const showContent = this.state.activeButton    
    
        return (
        <>
            {this.props.match.path === "/" && 
            <div>
                <h2>Coses que pots fer abans del gran dia</h2>
                <ul>
                    <li><Link to="/requests"><button>Proposa'ns</button></Link></li>
                    <li><Link to="/market"><button>Ajuda'ns</button></Link></li>
                    <li><Link to="/quiz"><button>Juga</button></Link></li>
                </ul>
            </div>}
            
            {this.props.match.path === "/requests" && 
            <section>
                <div>
                    <h2>Coses que pots demanar-nos</h2>
                    <ul>
                        <li>
                            <button name="food" onClick={(e) => this.handleButtons(e)}>
                            Menjar
                            </button>
                        </li>
                        <li>
                            <button name="accomodation" onClick={(e) => this.handleButtons(e)}>
                            Allotjament
                            </button>
                        </li>
                        <li>
                            <button name="music" onClick={(e) => this.handleButtons(e)}>
                            Música
                            </button>
                        </li>
                    </ul>                    
                </div>
                <article>
                    { showContent === "food" && <FoodRequest />}
                    { showContent === "accomodation" && <AccomodationRequest />}
                    { showContent === "music" && <MusicRequest />}
                </article>
            </section>}

            {this.props.match.path === "/info" && 
            <section>
                <div>
                    <button name="when" onClick={(e) => this.handleButtons(e)}>Quan</button>
                    <button name="where" onClick={(e) => this.handleButtons(e)}>On</button>
                    <button name="how" onClick={(e) => this.handleButtons(e)}>Com</button>
                </div>
                <article>
                    { showContent === "when" && <WhenInfo lang={this.props.lang} />}
                    { showContent === "where" && <WhereInfo />}
                    { showContent === "how" && <HowInfo />}
                </article>
            </section>}
        </>
        )
    }
}

export default ActivityMenu;