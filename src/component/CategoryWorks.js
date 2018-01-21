import React from 'react';
import '../css/categoryWorks.css';
import { Grid, Row, Col } from 'react-bootstrap';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCoffee, faCog, faSpinner, faQuoteLeft, faSquare, faCheckSquare } from '@fortawesome/fontawesome-free-solid';


class CategoryWorks extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} lg={6}>
            <div className="popular-img-2">
              <h3 className="changes-text">Category</h3>
              <div className="wapper-text-p">
                <p className="p-changes-text">
               Project
                </p>
                <p className="p-changes-text">
               Project
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <div className="popular-img-2">
              <h3 className="changes-text">Category</h3>
              <div className="wapper-text-p">
                <p className="p-changes-text">
               Project
                </p>
                <p className="p-changes-text">
               Project
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Grid>

    );
  }
}

export default CategoryWorks;

