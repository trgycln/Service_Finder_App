import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ThemeContextProvider } from "./context/theme-context-provider";
import TokenContextProvider from "./context/token-context-provider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeContextProvider>
        <TokenContextProvider>
          <App />
        </TokenContextProvider>
      </ThemeContextProvider>
    </Provider>
  </React.StrictMode>
);
