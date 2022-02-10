const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=8b0ca50b7e62487aa4bb514975ab7e6f";
const container = document.querySelector(".container");
const loader = document.querySelector(".load");

async function getGames() {
	try {
		const response = await fetch(url);
		const games = await response.json();
		const gameList = games.results;
		loader.style.display = "none";

		for (let i = 0; i < 8; i++) {
			let rating = gameList[i].rating;
			let tags = gameList[i].tags.length;
			let gameClass = "game";
			if (isNaN(Number(rating)) || !rating) {
				rating = "not rated";
			}
			if (i % 2 === 0) {
				gameClass = "game altLine";
			}
			if (!tags) {
				tags = 0;
			}
			container.innerHTML += `<div class="games">
                                <div class="${gameClass}">${gameList[i].name}</div> 
                                <div class="${gameClass}">${rating}</div>
                                <div class="${gameClass}">${tags}</div>
                              </div>`;
		}
		console.log("success");
	} catch (error) {
		container.innerHTML += "Loading data failed";
	}
}

getGames();
