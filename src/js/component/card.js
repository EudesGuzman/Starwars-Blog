import React, { useContext } from "react";
//import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card = l => {
	const { store, actions } = useContext(Context); //funciona como .provider .consumer !

	return (
		<>
			<div className="card-group">
				<div className="card">
					<img className="card-img-top" src="..." alt="Card image cap" />
					<div className="card-body">
						<h5 className="card-title">{l.name}</h5>
						<p className="card-text">{l.gender}</p>
						<p className="card-text">{l.hairColor}</p>
						<p className="card-text">{l.eyeColor}</p>

						<button type="button" className="btn btn-outline-primary">
							Learn more
						</button>
						<button type="button" className="btn btn-outline-warning">
							<i className="fa fa-heart" aria-hidden="true" />
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
