import * as service from './service'

const container = document.querySelector('.container');

const crearCard = (elem) => {

	container.innerHTML = `

	<div class="card">
		<img class="card_img" src="${elem.sprites.other.dream_world.front_default}" alt="img_pokemon">
		<h3 class="card_title">
			<i class="icon las la-atom"></i> ${elem.name}
		</h3>

		<span class="card_type">
			<i class="icon las la-award"></i> Tipo: ${elem.types[0].type.name}
		</span>

		<p class="card_stats">Estadisticas</p>

		<span class="stats">
			<i class="icon lar la-heart"></i> HP: ${elem.stats[0].base_stat}
		</span>
		<span class="stats">
			<i class="icon las la-crosshairs"></i> Ataque: ${elem.stats[1].base_stat}
		</span>
		<span class="stats">
			<i class="icon las la-shield-alt"></i> Defensa: ${elem.stats[2].base_stat}
		</span>
		<span class="stats">
			<i class="icon las la-hat-wizard"></i> Ataque esp: ${elem.stats[3].base_stat}
		</span>
		<span class="stats">
			<i class="icon las la-shield-alt"></i> Defencia esp: ${elem.stats[4].base_stat}
		</span>
		<span class="stats">
			<i class="icon las la-biking"></i> Velocidad: ${elem.stats[5].base_stat}
		</span>
		<span class="stats">
			<i class="icon las la-baby"></i> Peso: ${elem.weight}
		</span>
	</div>

	`
}

const crearError = () => {

	container.innerHTML = `
	<div class="poperror">
		<i class="las la-exclamation"></i>
		<p>No se ha encontrado ningun pokemon con ese nombre!</p>
	</div>	
	`
}

const eventos = async () => {
	const search = document.querySelector('.searchbar_input');
	const btn    = document.querySelector('.searchbar_btn');

	search.addEventListener('keyup', async (event) => {
		if (event.keyCode === 13) {
			service.getData(event.target.value.toLowerCase())
				.then(data => crearCard(data))
				.catch(crearError())
		}

		btn.addEventListener('click', function(e) {
			if (event.target.value != "" && event.target.value != " ") {
				service.getData(event.target.value.toLowerCase())
				.then(data => crearCard(data))
				.catch(crearError())
			}
		});

	});


}

export const init = async () => {
	eventos()
}