import React from 'react';
import { Route } from 'react-router';
import Navigation from './components/Navigation';
import ListPage from './pages/ListPage';
import WritePage from './pages/WritePage';

const App = () => {
  return (
    <div>
      <Navigation />
      <Route path="/" exact={true} component={ListPage} />
      <Route path="/write" exact={true} component={WritePage} />
    </div>
  );
};

export default App;
