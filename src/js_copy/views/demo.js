import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";
import { element } from "prop-types";

export const Demo = () => {
	const { url, store, actions } = useContext(Context);

	switch (store.details.name) {
		case "Luke Skywalker":
			store.details.url = "https://www.cinemascomics.com/wp-content/uploads/2019/11/luke-sable-de-luz.jpg";
			store.details.descripcion =
				"Luke Skywalker es un personaje ficticio y el protagonista​ de la trilogía original de la saga de ciencia ficción Star Wars.​ Procedente de la colonia de asteroides de Polis Massa, es el único hijo varón de Anakin Skywalker y la senadora Padmé Amidala";
			break;
		case "C-3PO":
			store.details.url =
				"https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2019/10/star-wars-episodio-ix-ascenso-skywalker-c-3po.jpg";
			break;
		case "R2-D2":
			store.details.url =
				"https://s1.eestatic.com/2017/06/29/cultura/cine/Star_Wars-George_Lucas-Peliculas-Subastas-Cine_227488145_37888496_1024x576.jpg";
			break;
		case "Darth Vader":
			store.details.url = "https://www.elcomercio.com/files/article_main/uploads/2018/10/25/5bd1ebb9b9207.jpeg";
			break;
		case "Leia Organa":
			store.details.url = "https://images.indianexpress.com/2016/12/princess-leia-1200.jpg";
			break;
		case "Owen Lars":
			store.details.url =
				"https://i0.wp.com/www.lafosadelrancor.com/wp-content/uploads/2016/12/owen-lars-bio-5_dd84f781.jpeg?fit=400%2C169&ssl=1";
			break;

		// default
		default:
			store.details.url = "https://via.placeholder.com/350x150";
			store.details.descripcion = "descripcion personaje";
	}

	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<img className="card-img-top" src={store.details.url} alt="foto" />
				</div>
				<div className="col">
					<h2>{store.details.name}</h2>
					<p>{store.details.descripcion}</p>
				</div>
			</div>
			<br />
			<div className="row">
				<div className="col">
					Name <br /> {store.details.name}
				</div>
				<div className="col">
					Birth
					<br /> {store.details.birth_year}
				</div>
				<div className="col">
					Gender
					<br /> {store.details.gender}
				</div>
				<div className="col">
					Height
					<br /> {store.details.height}
				</div>
				<div className="col">
					Skin color
					<br /> {store.details.skin_color}
				</div>
				<div className="col">
					Eye color
					<br /> {store.details.eye_color}
				</div>
			</div>
		</div>
	);
};
