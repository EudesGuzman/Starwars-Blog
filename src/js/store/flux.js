const getState = ({ getStore, /* getActions ,*/ setStore }) => {
	return {
		store: {
			characters: [],
			details: {},
			favorito: []
		},

		actions: {
			// Use getActions to call a function within a fuction

			// añadimos async antes de la función
			loadSomeData: async () => {
				let response = await fetch("https://swapi.dev/api/people/");
				let element = await response.json();
				setStore({ characters: element.results });
			},

			details: element => {
				setStore({ details: element });
			},

			/* addFavorito: element => {
				const store = getStore();
				console.log(store.favorito.length);
				setStore({ favorito: [...store.favorito, element] });
            } */

			addFavorito: element => {
				const store = getStore();
				setStore({ favorito: [...store.favorito, element] });

				for (let i = 0; i < store.favorito.length; i++) {
					if (element == store.favorito[i - 1]) {
						store.favorito.pop();
					}
				}
			}
		}
	};
};

export default getState;
