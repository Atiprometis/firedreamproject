import React from 'react';
import '../css/home.css';

import Popular from '../component/Popular';
import ProjectViewmore from '../component/ProjectViewmore';
import Uploaderimage from '../component/Uploaderimage';

class Home extends React.Component {
  render() {
    return (


      <div className="con-witd-100">


        <div className="container">

          <p className="font-p">Popular project</p>

          <Popular />
          <ProjectViewmore />
          <Uploaderimage />
        </div>
      </div>

    );
  }
}

export default Home;

