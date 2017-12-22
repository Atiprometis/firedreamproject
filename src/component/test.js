import React, { Component } from 'react';


import firebase, { auth, provider } from '../database/firebase';


class Test extends Component {
  constructor() {
    super();
    this.state = {
      projectname: '',
      contentname: '',
      projects: [],
      user: null,
      password: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  logout() {

  }

  login() {
    auth.signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        const password = result.password;
        this.setState({
          user,
          password,
        });
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const projectsRef = firebase.database().ref('projects');
    const project = {
      title: this.state.projectname,
      content: this.state.contentname,
    };
    projectsRef.push(project);
    this.setState({
      projectname: '',
      contentname: '',
    });
  }

  componentDidMount() {
    const projectsRef = firebase.database().ref('projects');
    projectsRef.on('value', (snapshot) => {
      const projects = snapshot.val();
      const newState = [];
      for (const project in projects) {
        newState.push({
          id: project,
          title: projects[project].title,
          content: projects[project].content,
        });
      }
      this.setState({
        projects: newState,
      });
    });
  }

  render() {
    return (


      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div>
          <h3>This login</h3>
          {this.state.user ?
            <button onClick={this.logout}>Log out</button>
        :
            <button onClick={this.login}>Log in</button>


      }
        </div>


        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="projectname"
            placeholder="what"
            onChange={this.handleChange}
            value={this.state.projectname}
          />
          <input
            type="text"
            name="contentname"
            placeholder="what the fuck"
            onChange={this.handleChange}
            value={this.state.contentname}
          />
          <button>add item</button>
        </form>

        <div className="wrapper">
          <ul>
            {this.state.projects.map(project => (
              <li key={project.id}>
                <h3> asdasd : {project.title}</h3>
                <p>brought by: {project.content}</p>
              </li>
                ))}
          </ul>

        </div>

      </div>


    );
  }
}

export default Test;
