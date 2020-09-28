import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Autocomplete = props => {
	const { store, actions } = useContext(Context);
	const { idx, element } = props;

	// guia para cargar funciones --> actions.loadSomeData();
	return (
		<>
			<input
				className="btn btn-outline-warning change "
				onChange={(e, element, event) => {
					//console.log(store.characters);
					actions.autocomplete(e, element);
				}}
			/>
		</>
	);
};
