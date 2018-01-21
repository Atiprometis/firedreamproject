import React from 'react';
import '../css/searchworks.css';
import { Grid, Row, Col } from 'react-bootstrap';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCoffee, faCog, faSpinner, faQuoteLeft, faSquare, faCheckSquare } from '@fortawesome/fontawesome-free-solid';

class Searchworks extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} lg={6}>
            <div className="popular-img">
              <h3 className="icon-changes">
                <FontAwesomeIcon icon={['fas', 'search']} size="2x" />
              </h3>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Searchworks;

