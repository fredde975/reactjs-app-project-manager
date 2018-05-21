import React, { Component } from 'react';
import PropTypes from "prop-types";

class TodoItem extends Component {
    render() {
        console.log(this.props)
        return (
            <li className="Todos">
                <strong>{this.props.todo.title}</strong> - {this.props.todo.completed}
            </li>
        );
    }
}

//verifiera typer på props
TodoItem.propTypes = {
    todo: PropTypes.object,
}


export default TodoItem;
