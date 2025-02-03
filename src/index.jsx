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

const root = ReactDOM.createRoot(document.getElementById("root"));

const clientId = "1047481348543-flpdfk65g3p6r0c9nfuul17ku28ld5pi.apps.googleusercontent.com";

root.render(
  <GoogleOAuthProvider clientId={clientId}>
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
);
