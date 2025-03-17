import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//Import the Redux store. ***  3.A
import { store } from "./Store/store";

//Import the Provider component from react-redux. ***  3.b
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  /* put a <Provider> around your <App>, and pass the store as a prop: 3.C */
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
