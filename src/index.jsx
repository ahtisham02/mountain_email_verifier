import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MainRoutes from "./routes/MainRoutes";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { persistor, store } from "./store/store";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { IntercomProvider } from "react-use-intercom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const link = document.createElement("link");
link.href = "/fonts/PlusJakartaSans-Light.ttf";
link.rel = "preload";
link.as = "font";
link.type = "font/ttf";
link.crossOrigin = "anonymous";
document.head.appendChild(link);

root.render(
  <IntercomProvider appId={process.env.REACT_APP_INTERCOM_APP_ID}>
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENTID}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MainRoutes />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
          />
        </PersistGate>
      </Provider>
    </GoogleOAuthProvider>
  </IntercomProvider>
);
