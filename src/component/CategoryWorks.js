import React from 'react';
import '../css/categoryWorks.css';
import { Grid, Row, Col } from 'react-bootstrap';

class CategoryWorks extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} lg={6}>
            <div className="popular-img" />
          </Col>
        </Row>
      </Grid>

    );
  }
}

export default CategoryWorks;

