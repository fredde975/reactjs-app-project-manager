import React, {Component} from 'react';
import uuid from 'uuid';
import Projects from './components/Projects';
import AddProject from './components/AddProject';
import './App.css';

class App extends Component {

    constructor() {
        super();
        this.state = {
            projects: []
        }
    }

    componentWillMount() {
        this.setState({
            projects: [
                {
                    id:uuid.v4(),
                    title: 'business website',
                    category: 'Web Design'
                },
                {
                    id:uuid.v4(),
                    title: 'Social app',
                    category: 'Mobile development'
                },
                {
                    id:uuid.v4(),
                    title: 'Ecommerce Shopping cart',
                    category: 'Web development'
                }
            ]
        });
    }

    //hanterar att statet (som är immutable) förändras
    handleAddProject(project){
        console.log("Log from App.js, handleAddProject" + project);
        let projects = this.state.projects;
        projects.push(project);
        this.setState({projects:projects});

    }

    handleDeleteProject(id){
        let projects = this.state.projects;
        let index = projects.findIndex(x => x.id === id);
        projects.splice(index, 1);
        this.setState({projects:projects});
    }

    render() {
        return (
            <div className="App">
                <AddProject addProject={this.handleAddProject.bind(this)}/>
                <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
            </div>
        );
    }
}

export default App;














