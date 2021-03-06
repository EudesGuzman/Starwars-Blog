const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			details: {},
			favorito: [{ name: "No Tasks" }],
			planets: [],
			autocomplete: ""
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

				var indice = store.favorito.indexOf(element); // obtenemos el indice
				//console.log(indice);
				store.favorito.splice(indice, 1);
				setStore({ favorito: [...store.favorito] });
				if (store.favorito.length == 0) {
					setStore({ favorito: [{ name: "No Tasks" }] });
				}
			},
			autocomplete: e => {
				const store = getStore();
				let autocompleteName = "";
				autocompleteName += e.target.value;

				for (let i = 0; i < store.characters.length; i++) {
					if (store.characters[i].name.toLowerCase().indexOf(autocompleteName.toLowerCase()) == 0) {
						if (autocompleteName.length > 2) {
							e.target.value = store.characters[i].name;
							setStore({ autocomplete: store.characters[i].name });
							console.log(store.autocomplete);
						}
					}
				}
			}
		}
	};
};

export default getState;
