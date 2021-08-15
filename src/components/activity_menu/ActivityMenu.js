import React from 'react';
import { Link } from 'react-router-dom';

import WhenInfo from './../info_components/when/WhenInfo';
import WhereInfo from './../info_components/where/WhereInfo';
import HowInfo from './../info_components/how/HowInfo';
import FoodRequest from './../requests_components/food_request/FoodRequest';
import AccomodationRequest from './../requests_components/accomodation_request/AccomodationRequest';
import MusicRequest from './../requests_components/music_request/MusicRequest';

import homeTexts from './../../pages/home/home.texts';

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
                <h3>{this.props.lang === "catalan" ? homeTexts.suggestion.cat : this.props.lang === "spanish" ? homeTexts.suggestion.esp : homeTexts.suggestion.eng}</h3>
                {this.props.popupIsActive === true 
                ?
                <ul>
                    <li><Link to="/requests"><button disabled>{this.props.lang === "catalan" ? homeTexts.requestBtn.cat : this.props.lang === "spanish" ? homeTexts.requestBtn.esp : homeTexts.requestBtn.eng}</button></Link></li>
                    <li><Link to="/market"><button disabled>{this.props.lang === "catalan" ? homeTexts.collaborateBtn.cat : this.props.lang === "spanish" ? homeTexts.collaborateBtn.esp : homeTexts.collaborateBtn.eng}</button></Link></li>
                    <li><Link to="/quiz"><button disabled>{this.props.lang === "catalan" ? homeTexts.playBtn.cat : this.props.lang === "spanish" ? homeTexts.playBtn.esp : homeTexts.playBtn.eng}</button></Link></li>
                    <li><Link to="/"><button disabled>{this.props.lang === "catalan" ? homeTexts.signBtn.cat : this.props.lang === "spanish" ? homeTexts.signBtn.esp : homeTexts.signBtn.eng}</button></Link></li>
                </ul>
                :
                <ul>
                    <li><Link to="/requests"><button>{this.props.lang === "catalan" ? homeTexts.requestBtn.cat : this.props.lang === "spanish" ? homeTexts.requestBtn.esp : homeTexts.requestBtn.eng}</button></Link></li>
                    <li><Link to="/market"><button>{this.props.lang === "catalan" ? homeTexts.collaborateBtn.cat : this.props.lang === "spanish" ? homeTexts.collaborateBtn.esp : homeTexts.collaborateBtn.eng}</button></Link></li>
                    <li><Link to="/quiz"><button>{this.props.lang === "catalan" ? homeTexts.playBtn.cat : this.props.lang === "spanish" ? homeTexts.playBtn.esp : homeTexts.playBtn.eng}</button></Link></li>
                    <li><Link to="/"><button>{this.props.lang === "catalan" ? homeTexts.signBtn.cat : this.props.lang === "spanish" ? homeTexts.signBtn.esp : homeTexts.signBtn.eng}</button></Link></li>
                </ul>}
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