import React, { Component } from 'react';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import HomePage from './pages/HomePage'
export class App extends Component {
  render() {
    return (
      <>
          <Router>
              <Route exact path = '/' render={
                props =>(
                  <React.Fragment>
                    <HomePage/>
                  </React.Fragment>
                )
              }>
              </Route>
              <Route exact path = '/signup' render={
                props =>(
                  <React.Fragment>
                    
                  </React.Fragment>
                )
              }>
              </Route>
              <Route exact path = '/signin' render={
                props =>(
                  <React.Fragment>
                  </React.Fragment>
                )
              }>
              </Route>
          </Router>          
        </>
    )
  }
}

export default App;