import React from "react";
import ModalOverlay from "./ModalOverlay";

const SignUpModal: React.FC<{ show: boolean; onHide: () => void }> = ({
    show,
    onHide,
}) => {
    if (!show) return null;

    return (
        <ModalOverlay>
            <div
                className="modal show"
                style={{ display: "block" }}
                tabIndex={-1}
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-uppercase">
                                Sign Up
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                onClick={onHide}
                            ></button>
                        </div>
                        <div className="modal-body">
                            <div className="alert alert-danger">
                                <span>
                                    The service is currently in beta, so public
                                    registration is not available.
                                </span>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={onHide}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </ModalOverlay>
    );
};

export default SignUpModal;
