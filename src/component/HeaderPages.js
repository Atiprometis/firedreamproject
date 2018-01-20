import React from 'react';
import '../css/headerpages.css';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Drawer from 'react-motion-drawer';
import {logout}from '../database/firebase'
import { Line } from 'react-chartjs-2';

const style = {
  background: "#F9F9F9",
  boxShadow: "rgba(0, 0, 0, 0.188235) 0px 10px 20px, rgba(0, 0, 0, 0.227451) 0px 6px 6px"
};

class HeaderPages extends React.Component {
  state = {
    openLeft: false,
    openRight: false,
    relativeWidth: false,
    width: 250
  };

  setWidth = e => {
    this.setState({
      width: Number(e.target.value) || e.target.value
    });
  }

 

  render() {
    const { openLeft, openRight} = this.state;
    const drawerProps = {
      overlayColor: "rgba(255,255,255,0.6)",
      drawerStyle: style
    };
    return (
      

      <div>

        
        <div className="header ">
          <div className="container">
            {!openRight &&
              <Drawer
                {...drawerProps}
                width={this.state.width}
                fadeOut={true}
                open={openLeft}
                onChange={open => this.setState({ openLeft: open })}

                >
            <div className="ContainerWapper">
                <div className="CharacterMe">
                    <div className="chatcterMe-image">

                    </div>
                </div>
                <div className="StartProject">
                    <h3 className="colortt">Start project</h3>
                </div>
                <div className="FindTeam">
                <Link to="/findworks">
                    <h3 className="colortt" 
                    onClick={() => 
                      this.setState({openLeft: !openLeft, openRight: false })
                      }
                    >Find Team</h3>
                </Link>    
                </div>
                <div className="Logout">
                
                  <Link to="/">
                  <h3 className="colortt" onClick={() => 
                  this.setState({openLeft: !openLeft, openRight: false })
                  }>Log out</h3>
                  </Link>     
                </div>
              </div>

              </Drawer>}

            <ul>
              <Grid>
                <Row className="row-header">
                  <Col xs={3} lg={3} className="not-text-align">
                  <li>

                    
                      <a to="/" onClick={() =>
                      this.setState({ openLeft: !openLeft, openRight: false })}
                      >icon
                      </a>
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
