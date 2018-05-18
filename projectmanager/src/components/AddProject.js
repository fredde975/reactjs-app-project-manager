import React, {Component} from 'react';
import uuid from 'uuid';

import ProjectItem from "./ProjectItem";

class AddProject extends Component {
    constructor() {
        super();
        this.state = {
            newProject: {}
        }
    }


    static defaultProps = {
        categories: ['Web design', 'Web Development', 'Mobile development']
    }

    handleSubmit(e) {
        console.log('Title = ' + this.refs.title.value);
        if (this.refs.title.value === '') {
            alert('title is required');
        } else {
            console.log('Title = ' + this.refs.title.value);
            //console.log('Category = ' + this.refs.category.value);
            e.preventDefault();

            this.setState({
                newProject: {
                    id:uuid.v4(),
                    title: this.refs.title.value,
                    //category: this.refs.category.value
                    category: 'category'
                }
            }, function () {
                console.log(this.state);
                this.props.addProject(this.state.newProject)
            });
        }

        // console.log(this.refs.title.value);
        e.preventDefault();
    }


    render() {
        let categoryOptions = this.props.categories.map(category => {
            return <option key={category} value={category}>{category}</option>
        });
        return (
            <div>
                <h3>Add Project</h3>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <label>Title</label><br/>
                        <input type="text" ref="title"/>
                    </div>
                    <div>
                        <label>Category</label><br/>
                        <select> ref="category">
                            {categoryOptions}
                        </select>
                    </div>
                    <br/>
                    <input type="submit" value="Submit"/>
                    <br/>
                </form>
            </div>
        );
    }
}

export default AddProject;
