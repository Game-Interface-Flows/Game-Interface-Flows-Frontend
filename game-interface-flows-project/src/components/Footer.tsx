import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-light mt-2">
            <div className="container text-center py-3">
                <p className="m-0">Questions or problems?</p>
                <p className="m-0">
                    tw:
                    <space-space />
                    <a
                        href="https://twitter.com/evllko"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        @evllko
                    </a>
                    <space-space />|<space-space />
                    gm: evlko.oklve
                </p>
            </div>
        </footer>
    );
};

export default Footer;
