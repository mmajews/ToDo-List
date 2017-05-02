import React from "react";
import Task from "./Task";
import connect from "react-redux/es/connect/connect";

class List extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    let listItems = this.props.elements.map((el, i) =>
      <Task name={el.name} key={i} description={el.description} id={el.id}/>
    );

    return (
      <ul className="collection">
        {listItems}
      </ul>
    )
  }

}

export default connect()(List);
