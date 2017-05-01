import React from "react";
import Task from "./Task";

class List extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let listItems = this.props.elements.map((el, i) =>
      <Task name={el.name} key={i}/>
    );

    return (
      <div className="row">
        {listItems}
      </div>
    )
  }

}


export default List;
