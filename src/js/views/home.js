import React, { useContext } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Card } from "../component/card";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<div className="container">
				<h2 className="">Characters</h2>
				<div className="card-group scrolling-wrapper scrollbar-ripe-malinka row flex-nowrap mt-4 mb-4">
					{store.characters.map((elm, index) => {
						//	console.log(a);
						return <Card idx={index} element={elm} key={index} />;
					})}
				</div>

				<h2 className="">Planets</h2>
				<div className="card-group scrolling-wrapper scrollbar-ripe-malinka row flex-nowrap mt-4 mb-4">
					{store.planets.map((elm, index) => {
						//	console.log(a);
						return <Card idx={index} element={elm} key={index} />;
					})}
				</div>
			</div>
		</>
	);
};
