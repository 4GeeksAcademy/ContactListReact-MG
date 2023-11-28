import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark w-100">
			<Link to="/contacts">
				<span className="navbar-brand mb-0 h1">React Contact List</span>
			</Link>
			<div className="ml-auto">
				<Link to="/contacts">
					<button className="btn btn-secondary">Contact List</button>
				</Link>
				<Link to="/add-contact">
					<button className="btn btn-secondary ms-2 me-2">Add Contact</button>
				</Link>
			</div>
		</nav>
	);
};
