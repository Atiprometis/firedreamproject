import React from 'react';
import '../css/header.css';
import { Grid, Row, Col } from 'react-bootstrap';
// import { Button } from 'reactbulma';


function HeaderPages({ }) {
  return (
    <div className="header ">
      <div className="container">
        <Grid>
          <Row className="row-header">
            <Col xs={3} lg={3} className="not-text-align">
              <p>icon</p>
            </Col>
            <Col xs={6} lg={4}>
              <p>Logo</p>
            </Col>
            <Col xs={3} lg={4}>
              <p>Sign in</p>
            </Col>
          </Row>
        </Grid>

      </div>
    </div>

  );
}

export default HeaderPages;
