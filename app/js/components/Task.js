import React from "react";
class Task extends React.Component {

  render() {
    return (
      <div className="col s4">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">{this.props.name}</span>
            <p>{this.props.description}</p>
          </div>
          <div className="card-action">
            <a className="waves-effect waves-light btn">Done</a>
          </div>
        </div>
      </div>
    )
  }

}
export default Task;
