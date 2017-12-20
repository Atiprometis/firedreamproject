import React, { Component } from 'react';

import Index from './pages/index';
import '../node_modules/bulma/css/bulma.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="is-flex-mobile">
            <Index />
          </div>

        </div>
      </div>

    );
  }
}

export default App;
