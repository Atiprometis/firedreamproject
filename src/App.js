import React, { Component } from 'react';

import Home from './pages/Home';
import '../node_modules/bulma/css/bulma.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="">
          <div className="is-flex-mobile">

            <Home />

          </div>

        </div>
      </div>

    );
  }
}

export default App;
