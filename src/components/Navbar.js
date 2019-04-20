import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () =>
{
	return(
		<div className="container">
			<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
				<div id="navbar-brand" className="navbar-brand">Website</div>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
			        <span className="navbar-toggler-icon"></span>
		      	</button>

		      	<div className="collapse navbar-collapse" id="navbarCollapse">
			        <ul className="navbar-nav mr-auto">
				        <li className="nav-item active"><Link className="nav-link" to="/">Home</Link></li>
						<li className="nav-item"><Link className="nav-link"  to="/about">About</Link></li>
						<li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
			        </ul>		       
		      	</div>	
			</nav>
			<br /><br /><br />
		</div>		
	)
}

export default Navbar;