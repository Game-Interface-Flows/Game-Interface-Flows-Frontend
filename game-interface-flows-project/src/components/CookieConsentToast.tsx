import React from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../stores/storeContext";

const CookieConsentToast: React.FC = observer(() => {
    const { toastStore } = useStore();

    if (!toastStore.showToast) return <></>;

    return (
        <div
            className="position-fixed bottom-0 end-0 p-3"
            style={{ zIndex: 11 }}
        >
            <div
                className="toast show"
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
            >
                <div className="toast-header">
                    <strong className="me-auto text-uppercase text-primary">
                        Cookies
                    </strong>
                </div>
                <div className="toast-body rounded-bottom">
                    We baked some cookies that you have to accept if you want to
                    make the service work correctly.
                    <div className="mt-2">
                        <button
                            className="btn btn-primary w-100"
                            onClick={toastStore.acceptCookies}
                        >
                            OK
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default CookieConsentToast;
