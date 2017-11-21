import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import registerServiceWorker from "./registerServiceWorker";

//Things we care about
import Header from "./components/Header";
import Snackspace from "./pages/Snackspace";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Title from "./components/Title";
import { Provider } from "react-redux";

import configureStore from './store/configureStore';
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
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();

