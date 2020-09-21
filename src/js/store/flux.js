const getState = ({ getStore, getActions, setStore }) => {
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

			addFavorito: element => {
				const store = getStore();
				setStore({ favorito: [...store.favorito, element] });

				for (let i = 0; i < store.favorito.length; i++) {
					if (element == store.favorito[i - 1]) {
						store.favorito.pop();
					}
				}

				let selection = document.querySelector(".change");
				console.log(element);
				selection.classList.add("active");
			},

			deleteFav: element => {
				const store = getStore();
				console.log(store.favorito, "favorito");
				console.log(element, "element");

				var indice = store.favorito.indexOf(element); // obtenemos el indice
				console.log(indice);
				store.favorito.splice(indice, 1); // 1 es la cantidad de elemento a eliminar
				setStore({ favorito: [...store.favorito] });
			}
		}
	};
};

export default getState;
