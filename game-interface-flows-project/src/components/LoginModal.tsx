import React, { useState } from "react";
import ModalOverlay from "./ModalOverlay";
import { useStore } from "../stores/storeContext";

const LoginModal: React.FC<{ show: boolean; onHide: () => void }> = ({ show, onHide }) => {
	const { authStore } = useStore();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = async () => {
		await authStore.loginUser(username, password);
		if (authStore.token) onHide(); 
	};
    
	if (!show) return null;

	return (
		<ModalOverlay>
			<div className="modal show" style={{ display: "block" }} tabIndex={-1}>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Sign Up</h5>
							<button type="button" className="btn-close" onClick={onHide}></button>
						</div>
						<div className="modal-body">
							{authStore.error && <div className="alert alert-danger">{authStore.error}</div>}
							<form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
								<div className="mb-3">
									<label htmlFor="username" className="form-label">Username</label>
									<input
										type="text"
										className="form-control"
										id="username"
										value={username}
										onChange={(e) => setUsername(e.target.value)}
										required
									/>
								</div>
								<div className="mb-3">
									<label htmlFor="password" className="form-label">Password</label>
									<input
										type="password"
										className="form-control"
										id="password"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										required
									/>
								</div>
								<button type="submit" className="btn btn-primary">Log In</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</ModalOverlay>
	);
};

export default LoginModal;
