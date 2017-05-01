import React from "react";
import List from "./List";

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let elements = [
      {
        name: "1",
        description: "Desc 1"
      },
      {
        name: "2",
        description: "Desc 2"
      },
      {
        name: "3",
        description: "Desc 3"
      },
      {
        name: "4",
        description: "Desc 4"

      },
      {
        name: "5",
        description: "Desc 5"
      },
      {
        name: "6",
        description: "Desc 6"
      }
    ];

    return (
      <div>
        <List elements={elements}/>
      </div>
    )

  }

}
export default App;
