import React, { Component } from 'react';
// import Projects from "./Projects";
import PropTypes from "prop-types";

class ProjectItem extends Component {
    deleteProject(id){
        console.log('testing delete');
        this.props.onDelete(id)
    }

    render() {
        console.log(this.props)
        return (
            <li className="Projects">
                <strong>{this.props.project.title}</strong> - {this.props.project.category}
                <button onClick={this.deleteProject.bind(this, this.props.project.id)}> Delete </button>
       {/*<a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>X</a>*/}
            </li>
        );
    }
}

//verifiera typer på props
ProjectItem.propTypes = {
    project: PropTypes.object,
    onDelete: PropTypes.func
}


export default ProjectItem;
