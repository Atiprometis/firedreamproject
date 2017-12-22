import React from 'react';
import '../css/header.css';
import { Grid, Row, Col } from 'react-bootstrap';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';


class HeaderPages extends React.Component {
  render() {
    return (

      <div>
        <div className="header ">
          <div className="container">
            <ul>
              <Grid>
                <Row className="row-header">
                  <Col xs={3} lg={3} className="not-text-align">
                    <li>
                      <Link to="/">icon</Link>
                    </li>
                  </Col>
                  <Col xs={6} lg={4}>
                    <li>
                      <Link to="/dashboard" >Logo</Link>
                    </li>
                  </Col>
                  <Col xs={3} lg={4}>
                    <li>
                      <Link to="/login" >Login</Link>

                    </li>
                  </Col>
                </Row>
              </Grid>
            </ul>
          </div>

        </div>
      </div>
    );
  }
}


export default HeaderPages;
