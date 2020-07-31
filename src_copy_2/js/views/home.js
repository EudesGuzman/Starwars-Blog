import React, { useContext } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const Home = () => {
	const { store, actions } = useContext(Context);
	/* return (
		<>
			{store.characters.results.map((e, index) => {
				return <Card key={index} gender={e.gender} hairColor={e.hair_color} eyeColor={e.eye_color} />;
			})}
		</>
	); */
};
