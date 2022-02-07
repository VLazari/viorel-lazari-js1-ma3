const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=8b0ca50b7e62487aa4bb514975ab7e6f";
const container = document.querySelector(".container");
const loader = document.querySelector(".loader");

async function getGames() {
	try {
		const response = await fetch(url);

		const games = await response.json();
		const gameList = games.results;
		loader.style.display = "none";

		for (let i = 0; i < 8; i++) {
			let rating = gameList[i].rating;
			if (isNaN(Number(rating)) || !rating) {
				rating = "not rated";
			}
			container.innerHTML += `<div class="games">
                                <div class="game">${gameList[i].name}</div> 
                                <div class="game">${rating}</div>
                                <div class="game">${gameList[i].tags.length}</div>
                              </div>`;
		}
		console.log("success");
	} catch (error) {
		container.innerHTML += "Loading data failed";
	}
}

getGames();
