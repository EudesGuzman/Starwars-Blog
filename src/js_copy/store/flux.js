const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			details: {},
			favorito: [{ name: "No Tasks" }],
			planets: [],
			autocompleted: false
		},

		actions: {
			// Use getActions to call a function within a fuction

			// añadimos async antes de la función
			loadSomeData: async () => {
				let response = await fetch("https://swapi.dev/api/people/");
				let element = await response.json();
				setStore({ characters: element.results });
			},
			loadSomeDataPlanets: async () => {
				let response = await fetch("https://swapi.dev/api/planets/");
				let element = await response.json();
				setStore({ planets: element.results });
			},

			details: element => {
				setStore({ details: element });
			},

			addFavorito: element => {
				const store = getStore();

				if (store.favorito[0].name == "No Tasks") {
					setStore({ favorito: [element] });
				} else {
					setStore({ favorito: [...store.favorito, element] });
				}
				for (let i = 0; i < store.favorito.length; i++) {
					if (element == store.favorito[i - 1]) {
						store.favorito.pop();
					}
				}
			},

			deleteFav: element => {
				const store = getStore();
				//console.log(store.favorito, "favorito");
				//console.log(element, "element");

				var indice = store.favorito.indexOf(element); // obtenemos el indice
				//console.log(indice);
				store.favorito.splice(indice, 1); // 1 es la cantidad de elemento a eliminar
				setStore({ favorito: [...store.favorito] });
				if (store.favorito.length == 0) {
					setStore({ favorito: [{ name: "No Tasks" }] });
				}
			},
			autocomplete: (e, element) => {
				const store = getStore();
				let autocompleteName = "";
				autocompleteName += e.target.value;
				console.log(autocompleteName, "###########################");

				for (let i = 0; i < store.characters.length; i++) {
					if (store.characters[i].name.toLowerCase().indexOf(autocompleteName.toLowerCase()) == 0) {
						/* console.log(store.characters[i].name.toLowerCase());
						console.log("-------------------------"); */
						if (autocompleteName.length > 2) {
							e.target.value = store.characters[i].name;
							setStore({ details: store.characters[i], autocompleted: true });
						}
					}
				}
			}
		}
	};
};

export default getState;
