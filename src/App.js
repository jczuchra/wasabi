import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FrontPageContainer from './screens/FrontPageContainer';
import BandsContainer from './screens/BandsContainer';
import LoadingContainer from './screens/LoadingContainer';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/newgame' component={BandsContainer} />
        <Route path='/loading/:image' component={LoadingContainer} />
        <Route component={FrontPageContainer} />
      </Switch>
    </Router>
  );
}

export default App;
