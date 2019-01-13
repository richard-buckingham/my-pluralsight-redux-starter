import "babel-polyfill";
import React from "react";
import { Provider } from "react-redux";
import { render } from "react-dom";
import { Router, browserHistory } from "react-router";
import routes from "./routes";

// configure the redux store
import configureStore from "./store/configureStore";
const store = configureStore();

// css imports
import "./styles/styles.css"; // Webpack can import CSS files too!
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById("app")
);
