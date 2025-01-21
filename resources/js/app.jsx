import "../css/app.css";
import "./bootstrap";

import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createRoot } from "react-dom/client";
import { getSettingByKey } from "./Helper/api";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ProductProvider } from "./Context/ProductContext.jsx";

const fetchAppName = async () => {
    const appName = await getSettingByKey("title");
    return appName || "Buy Followers";
};

const fetchGoogleClientId = async () => {
    const googleClientId = await getSettingByKey("google_client_id");
    return googleClientId;
};

fetchAppName().then((appName) => {
    fetchGoogleClientId().then((googleClientId) => {
        createInertiaApp({
            title: (title) => `${title} - ${appName}`,
            resolve: (name) =>
                resolvePageComponent(
                    `./Pages/${name}.jsx`,
                    import.meta.glob("./Pages/**/*.jsx")
                ),
            setup({ el, App, props }) {
                const root = createRoot(el);

                root.render(
                    <GoogleOAuthProvider clientId={googleClientId}>
                        <ProductProvider>
                            <App {...props} />
                        </ProductProvider>
                    </GoogleOAuthProvider>
                );
            },
            progress: {
                color: "#4B5563",
            },
        });
    });
});
