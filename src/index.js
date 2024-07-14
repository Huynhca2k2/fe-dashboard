import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { SnackbarProvider } from "notistack";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
      <Theme>
        <App />
      </Theme>
    </SnackbarProvider>
  </React.StrictMode>
);

reportWebVitals();
