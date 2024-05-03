import React from "react";
import "../App.css";

interface ModalOverlayProps {
	children: React.ReactNode;
}

const ModalOverlay: React.FC<ModalOverlayProps> = ({ children }) => {
	return <div className="modal-overlay">{children}</div>;
};

export default ModalOverlay;
