import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Redirect } from "react-router-dom";

export const Autocomplete = props => {
	const { store, actions } = useContext(Context);
	const { idx, element } = props;

	// guia para cargar funciones --> actions.loadSomeData();
	return (
		<>
			<div>
				{store.autocomplete == "" && (
					<input
						className="btn btn-outline-warning change"
						onChange={e => {
							actions.autocomplete(e);
						}}
					/>
				)}
			</div>
			<div>
				{store.autocomplete.length > 4 && (
					<Link to="/demo">
						<input
							className="btn btn-outline-warning change"
							onClick={element => {
								actions.details(element);
							}}
							placeholder={store.autocomplete}
						/>
					</Link>
				)}
			</div>
		</>
	);
};
