import React from 'react';
import '../css/popular.css';

class Popular extends React.Component {
  render() {
    return (
      <div className="popular-img">
        <div className="wapper-user">
          <div className="pj-user">
            <div className="user-img" />
            <p className="user-text">User</p>
          </div>
        </div>
        <div className="text-user">
          <h1 className="text-user-content">Project</h1>
          <p className="text-user-content2">Helooo</p>
        </div>

      </div>
    );
  }
}

export default Popular;
