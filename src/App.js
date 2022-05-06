import React, { Component } from 'react';
import { Button, Content } from 'carbon-components-react';
import { Route, Switch } from 'react-router-dom';
import './app.scss';
import Header from './components/Header';

import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/repos" component={RepoPage} />
          </Switch>
          <Button>Button</Button>
        </Content>
      </>
    );
  }
}

export default App;
