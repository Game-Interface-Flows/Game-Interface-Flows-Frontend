import React from "react";
import ModalOverlay from "./ModalOverlay";

const FlowModal: React.FC<{ show: boolean; onHide: () => void }> = ({
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
                            <h5 className="modal-title">Sign Up</h5>
                            <button
                                type="button"
                                className="btn-close"
                                onClick={onHide}
                            ></button>
                        </div>
                        <div className="modal-body">
                            {/* Sign up form goes here */}
                            <p>Sign up form content...</p>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={onHide}
                            >
                                Close
                            </button>
                            <button type="button" className="btn btn-primary">
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </ModalOverlay>
    );
};

export default FlowModal;
