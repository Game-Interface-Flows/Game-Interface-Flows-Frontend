import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SignUpModal from "./SignUpModal";
import LoginModal from "./LoginModal";
import { observer } from "mobx-react-lite";
import { useStore } from "../stores/storeContext";
import FlowModal from "./FlowModal";

const Navbar: React.FC = observer(() => {
    const { authStore } = useStore();
    const [showSignUp, setShowSignUp] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showFlow, setShowFlow] = useState(false);
    const location = useLocation();

    const isRoot = location.pathname === "/";

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <div className="container-fluid px-3 py-1">
                <div className="col-sm-12 col-md-4 d-flex align-items-center justify-content-start">
                    {!isRoot && (
                        <Link to="/">
                            <button className="btn btn-outline-primary text-uppercase me-2">
                                Home
                            </button>
                        </Link>
                    )}
                    {authStore.isAuthenticated && (
                        <>
                            <button
                                className="btn btn-primary text-uppercase"
                                onClick={() => setShowFlow(true)}
                            >
                                New Flow
                            </button>
                            <FlowModal
                                show={showFlow}
                                onHide={() => setShowFlow(false)}
                            />
                        </>
                    )}
                </div>
                <div className="d-none d-md-flex col-md-4 align-items-center justify-content-center">
                    <Link className="navbar-brand text-uppercase" to="/">
                        <b>
                            Game <span className="text-primary">Interface</span>{" "}
                            Flows
                            <sup className="text-lowercase primary-text">β</sup>
                        </b>
                    </Link>
                </div>
                <div className="col-sm-12 col-md-4 d-flex align-items-center justify-content-end">
                    {!authStore.isAuthenticated ? (
                        <>
                            <button
                                className="btn btn-outline-primary text-uppercase me-2"
                                onClick={() => setShowSignUp(true)}
                            >
                                Sign Up
                            </button>
                            <SignUpModal
                                show={showSignUp}
                                onHide={() => setShowSignUp(false)}
                            />

                            <button
                                className="btn btn-primary text-uppercase"
                                onClick={() => setShowLogin(true)}
                            >
                                Log In
                            </button>
                            <LoginModal
                                show={showLogin}
                                onHide={() => setShowLogin(false)}
                            />
                        </>
                    ) : (
                        <button
                            className="btn btn-outline-primary text-uppercase"
                            onClick={() => authStore.logoutUser()}
                        >
                            Log out
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
});

export default Navbar;
