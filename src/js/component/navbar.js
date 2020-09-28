import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

// *******************************************************
import { Autocomplete } from "./autocomplete";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img src="https://cdn.iconscout.com/icon/free/png-256/starwars-6-569425.png" width="80px" />
				</span>
			</Link>

			<Autocomplete />

			<div className="ml-auto">
				<DropdownButton id="dropdown-basic-button" title="Favoritos">
					{store.favorito.map((elemento, index) => {
						//console.log(elemento.name);
						return (
							<Dropdown.Item key={index}>
								<Link
									to="/demo"
									onClick={() => {
										actions.details(elemento);
									}}>
									{elemento.name}
								</Link>

								<a
									className="oculto"
									onClick={() => {
										actions.deleteFav(elemento);
									}}>
									<i className="fa fa-trash" aria-hidden="true" />
								</a>
							</Dropdown.Item>
						);
					})}

					{/* FIN MAP */}
				</DropdownButton>
			</div>
		</nav>
	);
};
