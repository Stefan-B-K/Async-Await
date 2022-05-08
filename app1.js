import axios from 'axios'
import exectimer from 'exectimer';

var tick = new exectimer.Tick("TIMER");
tick.start()

// PARALLEL REQUESTS!
// async function get3Pokemon() {
// 	const proms = {}
// 	// let i = 1
// 	for (let i = 1; i <= 10; i++) {
// 		proms[i] = axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
// 	}
// 	const results = await Promise.all(Object.values(proms))
// 	printPokemon(results);
// }

// SEQUENTIAL REQUESTS!
async function get3Pokemon() {
	const results = {}
	for (let i = 1; i <= 10; i++) {
		results[i] = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
	}
	printPokemon(Object.values(results));
}


function printPokemon(results) {
	for (let pokemon of results) {
		console.log(pokemon.data.name);
	}
}

await get3Pokemon();

tick.stop()
var myTimer = exectimer.timers.TIMER
console.log("It took: " + myTimer.duration());
