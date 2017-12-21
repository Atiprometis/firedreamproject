import React from 'react';
import '../css/project.css';

class Project extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (

      <div className="wapper-pj">
          <div className="wapper-pj-1">
            <div className="wapper-box-1">
              <div className="pj-img" />
            </div>
            <section className="wapper-box-2">
              <h1 className="project-font">Project</h1>
              <p className="content-font">TExt</p>
            </section>
          </div>

        </div>

    );
  }
}


export default Project;
