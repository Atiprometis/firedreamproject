import React, { Component } from 'react';


import firebase from '../../database/firebase';
import '../../css/dashborad.css';
import Datagraphs from '../../database/datagrapgs';


class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      Sun: '',
      Mon: '',
      Tue: '',
      Wed: '',
      Thue: '',
      Fri: '',
      Sat: '',
      graphs: [],


    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const graphRef = firebase.database().ref('graphs');
    const graph = {
      sun: this.state.Sun,
      mon: this.state.Mon,
      tue: this.state.Tue,
      wed: this.state.Wed,
      thue: this.state.Thue,
      fri: this.state.Fri,
      sat: this.state.Sat,
    };

    graphRef.push(graph);
    this.setState({
      Sun: '',
      Mon: '',
      Tue: '',
      Wed: '',
      Thue: '',
      Fri: '',
      Sat: '',
    });
  }

  componentDidMount() {
    const graphRef = firebase.database().ref('graphs');
    graphRef.on('value', (snapshot) => {
      const graphs = snapshot.val();
      const newState = [];
      for (const graph in graphs) {
        newState.push({
          id: graph,
          sun: graphs[graph].sun,
          mon: graphs[graph].mon,
          tue: graphs[graph].tue,
          wed: graphs[graph].wed,
          thue: graphs[graph].thue,
          fri: graphs[graph].fri,
          sat: graphs[graph].sat,
        });
      }
      this.setState({
        graphs: newState,

      });
    });
  }


  render() {
    return (
      <div>


        {/* <Line data={data} /> */}
        <Datagraphs />

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="Sun"
            placeholder="Sun"
            onChange={this.handleChange}
            value={this.state.Sun}
          />
          <input
            type="text"
            name="Mon"
            placeholder="Mon"
            onChange={this.handleChange}
            value={this.state.Mon}
          />
          <input
            type="text"
            name="Tue"
            placeholder="Tue"
            onChange={this.handleChange}
            value={this.state.Tue}
          />
          <input
            type="text"
            name="Wed"
            placeholder="Wed"
            onChange={this.handleChange}
            value={this.state.Wed}
          />
          <input
            type="text"
            name="Thue"
            placeholder="Thue"
            onChange={this.handleChange}
            value={this.state.Thue}
          />
          <input
            type="text"
            name="Fri"
            placeholder="Fri"
            onChange={this.handleChange}
            value={this.state.Fri}
          />
          <input
            type="text"
            name="Sat"
            placeholder="Sat"
            onChange={this.handleChange}
            value={this.state.Sat}
          />
          <button>add item</button>
        </form>

        <div>
          <h1>Data Day all</h1>
          {this.state.graphs.map(graph => (
            <div className="show-item">
              <ul>
                <li key={graph.id}>
                  <h1 >Sun:{graph.sun}</h1>
                  <p>Mon: {graph.mon}</p>
                  <p>Tue: {graph.tue}</p>
                  <p>web: {graph.wed}</p>
                  <p>thue: {graph.thue}</p>
                  <p>Fri: {graph.fri}</p>
                  <p>Sat: {graph.sat}</p>
                </li>
              </ul>
            </div>
        ))}
        </div>

      </div>
    );
  }
}


export default Dashboard;
