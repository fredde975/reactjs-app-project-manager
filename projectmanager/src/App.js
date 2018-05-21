import React, {Component} from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import Projects from './components/Projects';
import AddProject from './components/AddProject';
import Todos from './components/Todos';
import './App.css';

class App extends Component {

    constructor() {
        super();
        this.state = {
            projects: []
        }
    }

    getTodos() {
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/todos',
            dataType:'json',
            cache: false,
            success: function(data){
                this.setState({todos: data}, function(){
                    console.log(this.state);
                })
            }.bind(this),
            error: function(xhr, status, err){
                console.log(err);
        }
        })
    }

    getProjects() {
        this.setState({
            projects: [
                {
                    id: uuid.v4(),
                    title: 'business website',
                    category: 'Web Design'
                },
                {
                    id: uuid.v4(),
                    title: 'Social app',
                    category: 'Mobile development'
                },
                {
                    id: uuid.v4(),
                    title: 'Ecommerce Shopping cart',
                    category: 'Web development'
                }
            ]
        });
    }

    componentWillMount() {
        this.getProjects();
        this.getTodos();
    }

    componentDidMount() {
        this.getTodos();
    }

    //hanterar att statet (som är immutable) förändras
    handleAddProject(project) {
        console.log("Log from App.js, handleAddProject" + project);
        let projects = this.state.projects;
        projects.push(project);
        this.setState({projects: projects});

    }

    handleDeleteProject(id) {
        let projects = this.state.projects;
        let index = projects.findIndex(x => x.id === id);
        projects.splice(index, 1);
        this.setState({projects: projects});
    }

    render() {
        return (
            <div className="App">
                <AddProject addProject={this.handleAddProject.bind(this)}/>
                <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
            <hr />
            <Todos todos={this.state.todos}/>
            </div>
        );
    }
}

export default App;














