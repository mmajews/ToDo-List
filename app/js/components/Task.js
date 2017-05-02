import React from "react";
import connect from "react-redux/es/connect/connect";
import {addTask} from "../actions/TaskActions";


let createHandlers = function (dispatch) {
  let onClick = function (event, data) {
    event.preventDefault();
    event.stopPropagation();
    dispatch(addTask(data));
  };

  return {
    onClick
  };
};


class Task extends React.Component {
  constructor(props) {
    super(props);
    this.handlers = createHandlers(this.props.dispatch)
  }

  render() {
    return (
      <li className="collection-item dismissable">
        <div>
          {this.props.name}
          <a href="#!" onClick={this.handlers.onClick} className="secondary-content">
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
