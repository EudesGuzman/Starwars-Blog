import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card = props => {
	const { store, actions } = useContext(Context); //funciona como .provider .consumer !
	const { idx, element } = props;

	// guia para cargar funciones --> actions.loadSomeData();
	return (
		<>
			<div className="col-3">
				<div className="card card-block">
					{/* <img className="card-img-top" src="https://via.placeholder.com/350x150" alt="Card image cap" /> */}
					<div className="card-body">
						<h5 className="card-title">{element.name}</h5>
						<p className="card-text">
							<b>Gender: </b> {element.gender}
						</p>
						<p className="card-text">
							<b>Hair Color: </b>
							{element.hair_color}
						</p>
						<p className="card-text">
							<b>Eye Color: </b> {element.eye_color}
						</p>

						<Link to="/demo">
							<button
								type="button"
								className="btn btn-outline-info"
								onClick={() => {
									actions.details(element);
								}}>
								Learn more
							</button>
						</Link>
						<button
							type="button"
							className="btn btn-outline-warning"
							onClick={e => {
								if (e.target.className == "btn btn-outline-warning") {
									actions.addFavorito(element);
									e.target.className = "btn btn-outline-success";
								} else {
									actions.deleteFav(element);
									e.target.className = "btn btn-outline-warning";
								}
							}}>
							<i className="fa fa-heart" aria-hidden="true" />
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
