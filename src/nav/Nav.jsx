import React from 'react';
import NavLink from './NavLink';
import { navLinks } from './navLinks';
import './Nav.css';

const Nav = () => {
	return (
		<nav>
			<div className="left">
				<p className="logo" >CbN</p>
			</div>
			<div className="right">
				{navLinks.map(({ navLinkId, scrollToId }, idx) => (
					<NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} />
				))}
			</div>
		</nav>
	);
};

export default Nav;
