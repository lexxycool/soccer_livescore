// fetching the data 

function getData(){

    fetch("https://api-football-v1.p.rapidapi.com/v3/timezone", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "4c3383174bmsh8f721be3e0001fep1183cdjsn4c3478da5378",
		"x-rapidapi-host": "api-football-v1.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
   
})
.catch(err => {
	console.error(err);
});

}


getData();