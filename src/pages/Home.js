import React from 'react';
import '../css/home.css';

import HeaderPages from '../component/HeaderPages';
import Popular from '../component/Popular';

class Home extends React.Component {
  render() {
    return (
      <div className="con-witd-100">

        <HeaderPages />
        <div className="container">

          <p className="font-p">Popular project</p>

          <Popular />
        </div>
      </div>
    );
  }
}

export default Home;

