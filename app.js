import axios from 'axios'

Array.prototype.isEmpty = function() { return !!!this.length }

async function listUniversities(country) {

	// const ulCountry = document.createElement('ul')
	// const ulTitle = document.createElement('h2')
	// ulTitle.innerText = country
	// document.body.append(ulTitle, ulCountry)

	try {
		const uniList = await axios.get(`http://universities.hipolabs.com/search?country=${country}`)
		if (uniList.data.isEmpty()) throw Error('Invalid country input')
		for (let uni of uniList.data) {

			// const liUni = document.createElement('li')
			// liUni.innerText = uni.name
			// ulCountry.append(liUni)

			console.log(uni.name);
		}
	} catch (err) {
		console.log('Error:::: ' + err.message);
	}
}

listUniversities('Bulgaria')


