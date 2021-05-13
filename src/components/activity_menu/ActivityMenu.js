import React from 'react';
import { Link } from 'react-router-dom';

function ActivityMenu() {
    return (
        <>
            <h2>Coses que pots fer abans del gran dia</h2>
            <ul>
                <li><Link to="/requests"><button>Proposa'ns</button></Link></li>
                <li><Link to="/market"><button>Ajuda'ns</button></Link></li>
                <li><Link to="/quiz"><button>Juga</button></Link></li>
            </ul>
        </>
    )
}

export default ActivityMenu;