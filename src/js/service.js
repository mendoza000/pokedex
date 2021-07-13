const url = "https://pokeapi.co/api/v2/pokemon";
let count = 0
const getData = async (name) => {
	try{
		const resp = await fetch(`${url}/${name}`)
		const data = await resp.json()

		if (!resp.ok) {throw `Resp no ok :(`}

		return data

	}catch(err){ 
		if (count < 3) {
			setTimeout(()=> {
				count++
				getData(name)
			}, 2000)
		}
		if (count > 3) {
			console.log(resp);
		}
		throw `Ocurrio un error :( ${err}`
	}
}





export{
	getData
}


/**/