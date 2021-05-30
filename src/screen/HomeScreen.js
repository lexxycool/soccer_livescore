import React, { useEffect } from 'react';
import './HomeScreen.css';



function HomeScreen() {    

        // the DOM elements

        var elapsedTime = document.querySelector('#elapsed');

        var homeTeamImage = document.querySelector('#homeLogo');
        var homeTeamName = document.querySelector('#homeName');

        var awayTeamImage = document.querySelector('#awayLogo');
        var awayTeamName = document.querySelector('#awayName');

   
        var scoreLine = document.querySelector('#goals');
        var matchTable = document.querySelector('#matchTable');




        useEffect(() => {
            
            // fetching data
            fetch("https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all", {
	            "method": "GET",
	            "headers": {
		            "x-rapidapi-key": "4c3383174bmsh8f721be3e0001fep1183cdjsn4c3478da5378",
		            "x-rapidapi-host": "api-football-v1.p.rapidapi.com"
	            }
            })
            .then(response => response.json()
                .then(data => {
                    console.log(data);
                    
                    var matchesList = data['response'];
                    var fixture =  matchesList[2]['fixture'];
                    var goals = matchesList[2]['goals'];
                    var teams = matchesList[2]['teams'];
                    console.log(matchesList.length);

                    elapsedTime.innerHTML = fixture['status']['elapsed'] + "'";

                    homeTeamImage.src = teams['home']['logo'];
                    awayTeamImage.src =  teams['away']['logo'];

                    homeTeamName.innerHTML = teams['home']['name'];
                    awayTeamName.innerHTML = teams['away']['name'];

                    scoreLine.innerHTML = goals['home'] + "-" + goals['away'];


                })
                )
            .catch(err => {
	            console.error(err);
            });
    
    }, []);



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
                
        </div>
    )
}

export default HomeScreen
