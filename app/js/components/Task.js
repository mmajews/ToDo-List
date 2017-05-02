import React from "react";
import connect from "react-redux/es/connect/connect";
import {deleteTask} from "../actions/TaskActions";


let createHandlers = function (dispatch) {
  let onClickDelete = function (id, event) {
    dispatch(deleteTask(id));
  };

  return {
    onClickDelete
  };
};


class Task extends React.Component {
  constructor(props) {
    super(props);
    this.handlers = createHandlers(this.props.dispatch);
    this.id = this.props.id
  }

  render() {
    return (
      <li className="collection-item dismissable">
        <div>
          {this.props.name}
          {this.props.id}
          <a href="#!" onClick={this.handlers.onClickDelete.bind(this, this.id)} className="secondary-content">
            <i className="material-icons">
              delete
            </i>
          </a>
        </div>
      </li>
    )
  }

}

export default connect()(Task);
