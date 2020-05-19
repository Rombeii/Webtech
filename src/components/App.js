import React from 'react';
import '../App.scss';
import FishermenPage from "./FishermenPage";
import CatchesPage from "./CatchesPage";
import FisherPage from "./FisherPage";
import HomePage from "./HomePage";
import Header from "./Header";
import { useHistory } from "react-router-dom";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  const history = useHistory();
  return (
      <Router history={history}>
        <Header/>
        <div className="container-fluid">
          <div className="row">
              <Switch>
                <Route path="/fishermen" exact component={FishermenPage}/>
                <Route path="/" exact component={HomePage}/>
                <Route path="/catches" exact component={CatchesPage}/>
                <Route path="/details/:id" exact component={FisherPage}/>
              </Switch>
          </div>
        </div>
      </Router>
  );
}

export default App;
