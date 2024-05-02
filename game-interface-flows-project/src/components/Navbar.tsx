// src/components/Navbar.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignUpModal from "./SignUpModal";
import LoginModal from "./LoginModal";
import { observer } from "mobx-react-lite";
import { useStore } from "../stores/storeContext";

const Navbar: React.FC = observer(() => {
	const { authStore } = useStore();
	const [showSignUp, setShowSignUp] = useState(false);
	const [showLogin, setShowLogin] = useState(false);

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">Game Interface Flows</Link>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link className="nav-link active" to="/">Home</Link>
						</li>
						{authStore.isAuthenticated ? (
							<>
								<li className="nav-item">
									<Link className="nav-link btn btn-primary" to="/add-book">Add a Book</Link>
								</li>
								<li className="nav-item">
									<button className="btn btn-primary me-2" onClick={() => authStore.logoutUser()}>Log out</button>
								</li>
							</>
						) : (
							<>
								<li className="nav-item">
									<button className="btn btn-primary me-2" onClick={() => setShowSignUp(true)}>Sign Up</button>
									<SignUpModal show={showSignUp} onHide={() => setShowSignUp(false)} />
								</li>
								<li className="nav-item">
									<button className="btn btn-primary" onClick={() => setShowLogin(true)}>Log In</button>
									<LoginModal show={showLogin} onHide={() => setShowLogin(false)} />
								</li>
							</>
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
});

export default Navbar;
