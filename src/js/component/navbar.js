import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img src="https://cdn.iconscout.com/icon/free/png-256/starwars-6-569425.png" width="80px" />
				</span>
			</Link>
			<div className="ml-auto">
				<DropdownButton id="dropdown-basic-button" title="Favoritos">
					{store.favorito.map((elemento, index) => {
						//console.log(elemento.name);
						return (
							<Dropdown.Item href="#/action-1" key={index}>
								{elemento.name}
							</Dropdown.Item>
						);
					})}

					{/* FIN MAP */}
				</DropdownButton>
			</div>
		</nav>
	);
};
