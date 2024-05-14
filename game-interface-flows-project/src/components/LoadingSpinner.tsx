import React from "react";

export function LoadingSpinner() {
    return (
        <div className="flex-fill d-flex flex-column align-items-center justify-content-center">
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}
