import React from 'react';
import './HomeScreen.css';



function HomeScreen() {
    return (
        <div className='main'>
            <div className='container'>
                <h1>Score Board</h1>
                <div className='title-box'>
                    <p>Local Team</p>
                    <p id='elapsed'>30'</p>
                    <p>Visitor Team</p>
                </div> 
                <div className='title-box'>
                    <div className='team'>
                        <img id='homeLogo'alt='' />
                        <p id='homeName'>Team Name</p>
                    </div>
                    <p id='goals'>2 - 1</p>
                    <div className='team'>
                        <img id='awayLogo' alt='' />
                        <p id='awayName'>Team Name</p>
                    </div>
                </div> 
                <hr />
                <div id='matchTable' className='matches-table'>

                </div>              
            </div>
                <script src='main.js'></script>
        </div>
    )
}

export default HomeScreen
