import React from 'react';
import { useNav } from '../customHooks/useNav';
import './Page.css';

const Contact = () => {
	// useNav takes in a navLinkId and returns a ref
	// this ref is used to register the navLinkId that's
	// currently in view, and apply activeClass styling
	// to the corresponding nav childElement

	const contactRef = useNav('Contact');

	return (
		<section ref={contactRef} id='contactContainer'>
			<div>
				<a href="https://ra.co/events/1565732"><h3>Get tickets on RA</h3></a>
				<a href="https://ra.co/clubs/46791"><h3>XLR</h3></a>
			</div>
		</section>
	);
};

export default Contact;
