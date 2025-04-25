import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import { store } from "./App/store.js";
import GlobalContextProvider from "./Context/GlobalContext.jsx";
import "./Styles/index.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </GlobalContextProvider>
  </StrictMode>
);
