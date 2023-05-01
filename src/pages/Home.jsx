import React from 'react';
import { useNav } from '../customHooks/useNav';
import './Page.css';

const Home = () => {
	// useNav takes in a navLinkId and returns a ref
	// this ref is used to register the navLinkId that's
	// currently in view, and apply activeClass styling
	// to the corresponding nav childElement

	const homeRef = useNav('Home');

	return (
		<section ref={homeRef} id='homeContainer'>
				<h1>Colour by Night</h1>
				<form action="https://ra.co/events/1565732">
					<input type="submit" value="tickets" />
				</form>
		</section>
	);
};

export default Home;
