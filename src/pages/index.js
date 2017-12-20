import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';

class Index extends React.Component {
  render() {
    return (
      <div>
        <ButtonToolbar>
          <Button bsStyle="primary" bsSize="large">Large button</Button>
          <Button bsSize="large">Large button</Button>
        </ButtonToolbar>
        <ButtonToolbar>
          <Button bsStyle="primary">Default button</Button>
          <Button>Default button</Button>
        </ButtonToolbar>
        <ButtonToolbar>
          <Button bsStyle="primary" bsSize="small">Small button</Button>
          <Button bsSize="small">Small button</Button>
        </ButtonToolbar>
        <ButtonToolbar>
          <Button bsStyle="primary" bsSize="xsmall">Extra small button</Button>
          <Button bsSize="xsmall">Extra small button</Button>
        </ButtonToolbar>
        <ButtonToolbar>
          {/* Standard button */}
          <Button>Default</Button>

          {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
          <Button bsStyle="primary">Primary</Button>

          {/* Indicates a successful or positive action */}
          <Button bsStyle="success">Success</Button>

          {/* Contextual button for informational alert messages */}
          <Button bsStyle="info">Info</Button>

          {/* Indicates caution should be taken with this action */}
          <Button bsStyle="warning">Warning</Button>

          {/* Indicates a dangerous or potentially negative action */}
          <Button bsStyle="danger">Danger</Button>

          {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
          <Button bsStyle="link">Link</Button>
        </ButtonToolbar>
      </div>

    );
  }
}

export default Index;

