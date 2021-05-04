import React from 'react';
import { Link } from 'react-router-dom';

function ActivityMenu() {
    return (
        <>
            <h2>Coses que pots fer abans del gran dia</h2>
            <ul>
                <li><Link to="/requests">Proposa'ns </Link></li>
                <li><Link to="/market">Ajuda'ns</Link></li>
                <li><Link to="/quiz">Juga</Link></li>
            </ul>
        </>
    )
}

export default ActivityMenu;