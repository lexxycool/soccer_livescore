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

        // the functions to create an element
        function addMatchTile(data) {

            // creating the tile div
            var matchtile = document.createElement('div');
            matchtile.classList.add('match-tile');

            // creating the home match box
            var homeTeam = document.createElement('div');
            homeTeam.classList.add('team');
            // creating tthe image and the text
            var homeTileTeamName = document.createElement('p');
            homeTileTeamName.innerHTML = data['teams']['home']['name'];
            var homeTileTeamLogo = document.createElement('img');
            homeTileTeamLogo.src = data['teams']['home']['logo'];
            homeTeam.appendChild(homeTileTeamLogo);
            homeTeam.appendChild(homeTileTeamName);

            // creating the away match box
            var awayTeam = document.createElement('div');
            awayTeam.classList.add('team');
            // creating tthe image and the text
            var awayTileTeamName = document.createElement('p');
            awayTileTeamName.innerHTML = data['teams']['away']['name'];
            var awayTileTeamLogo = document.createElement('img');
            awayTileTeamLogo.src = data['teams']['away']['logo'];
            awayTeam.appendChild(awayTileTeamLogo);
            awayTeam.appendChild(awayTileTeamName);

            // creating the score
            var score = document.createElement('p');
            score.innerHTML = data['goals']['home'] + "-" + data['goals']['away'];

            // append all the element to the parent

            matchtile.appendChild(homeTeam);
            matchtile.appendChild(score);
            matchtile.appendChild(awayTeam);

            matchTable.appendChild(matchtile);


        }




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

                    for(var i = 1; i < 10; i++){
                        addMatchTile(matchesList[i]);
                    }
                    

                })
                )
            .catch(err => {
	            console.error(err);
            });
    
    }, []);



    return (
        <div className='main'>
            <div className='container'>
                <h1>livescore</h1>
                <div className='title-box'>
                    <p>home Team</p>
                    <p id='elapsed'>30'</p>
                    <p>away Team</p>
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
