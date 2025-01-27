import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import RecommandedVideos from './RecommandedVideos';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchPage from './SearchPage';

function App() {
  return (
    <div className='app'>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <div className='app__page'>
              <Sidebar />
              <RecommandedVideos />
            </div>
          </Route>
          <Route exact path='/search/:searchTerm'>
            <div className='app__page'>
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
