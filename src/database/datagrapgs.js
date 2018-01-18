import React, { Component } from 'react';
import firebase from './firebase';
import { Line } from 'react-chartjs-2';


class Datagraphs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data1: 0,

      graphs: [],


    };
  }
  componentDidMount() {

  }


  getData() {
    setInterval(() => {
      const graphRef = firebase.database().ref('graphs');
      graphRef.once('value')
        .then((snapshot) => {
          const data1 = snapshot.child('/-L0w1QtkZ8sB2gWbP2xU').val();

          this.setState({ data1 });
        });
    }, 1000);
  }

  //   console.log(${data1})

  render() {
    const data = {
      labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
      datasets: [
        {
          label: 'My First dataset',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [this.state.data1.sun,
            this.state.data1.mon,
            this.state.data1.tue,
            this.state.data1.wed,
            this.state.data1.thue,
            this.state.data1.fri,
            this.state.data1.sat,
          ]
          // data: this.state.chartData.map()

          ,
        },
      ],
    };

    console.log(this.getData());
    return (
      <div>
        <ul>
          <li >
            <Line data={data} />

            {/* <div>
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
            </div> */}
          </li>
        </ul>
      </div>
    );
  }
}

export default Datagraphs;
