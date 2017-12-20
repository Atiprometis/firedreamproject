import React, { Component } from 'react';

import Home from './pages/Home';
import '../node_modules/bulma/css/bulma.css';
import Header from './component/header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="">
          <div className="is-flex-mobile">
            <Header />
            <Home />

          </div>

        </div>
      </div>

    );
  }
}

export default App;
