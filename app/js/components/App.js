import React from "react";
import List from "./List";
import Navbar from "./navbar/Navbar";
import {connect} from "react-redux";

class App extends React.Component {

  componentWillMount() {
    console.log(this.props)
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
