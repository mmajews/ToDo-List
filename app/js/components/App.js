import React from "react";
import List from "./List";
import Navbar from "./navbar/Navbar";
import {connect} from "react-redux";

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar />
        <List elements={this.props.tasks}/>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  };
}

export default connect(mapStateToProps)(App);
