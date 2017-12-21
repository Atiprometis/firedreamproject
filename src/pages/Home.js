import React from 'react';
import '../css/home.css';

import HeaderPages from '../component/HeaderPages';
import Popular from '../component/Popular';
import ProjectViewmore from '../component/ProjectViewmore';


class Home extends React.Component {
  render() {
    return (
      <div className="con-witd-100">

        <HeaderPages />
        <div className="container">

          <p className="font-p">Popular project</p>

          <Popular />
          <ProjectViewmore />

        </div>
      </div>
    );
  }
}

export default Home;

