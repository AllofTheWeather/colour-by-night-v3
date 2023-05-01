import React from 'react';
import { useNav } from '../customHooks/useNav';
import './Page.css';

const About = () => {
	// useNav takes in a navLinkId and returns a ref
	// this ref is used to register the navLinkId that's
	// currently in view, and apply activeClass styling
	// to the corresponding nav childElement

	const aboutRef = useNav('About');

	return (
		<section ref={aboutRef} id='aboutContainer'>
			<div>				
				<h3 className="light">Playing colourful dance music in Manchester</h3>
				<h3>22:00 - 02:00</h3>
				<h3 className="light">27/09/22</h3>
			</div>
		</section>
	);
};

export default About;
