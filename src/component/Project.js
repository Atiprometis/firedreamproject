import React from 'react';
import '../css/project.css';
import firebase from '../database/firebase';
import Test from '../component/test';

class Project extends React.Component {
  constructor() {
    super();

    this.state = {
      projectname: '',
      contentname: '',
      projects: [],
    };
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
      <div>
        {this.state.projects.map(project => (

          <div className="wapper-pj-1">
            <div className="wapper-box-1">
              <div className="pj-img" />
            </div>
            <section className="wapper-box-2">
              <ul>

                <li key={project.id}>
                  <h1 className="project-font">{project.title}</h1>
                  <p className="content-font">{project.content}</p>
                </li>


              </ul>
            </section>
          </div>


      ))}
      </div>


    );
  }
}


export default Project;
