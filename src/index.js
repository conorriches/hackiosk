import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import registerServiceWorker from "./registerServiceWorker";

//Pages
import Snackspace from "./pages/Snackspace";
import Labels from "./pages/Labels";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

//Components
import Header from "./components/Header";
import Title from "./components/Title";
import { Provider } from "react-redux";

import configureStore from "./store/configureStore";
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route component={Header} />
        <Route component={Title} />

        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/snackspace" component={Snackspace} />
            <Route
              exact
              path="/snackspace/category/:category"
              component={Snackspace}
            />
            <Route path="/labels" component={Labels} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
