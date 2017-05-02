import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Provider from "react-redux/src/components/Provider";
import createStore from "redux/es/createStore";
import {taskReducer} from "./reducers/TaskReducer";

let preloadState = {
  tasks: [
    {
      name: "1",
      description: "desc 1",
      id: 1
    },
    {
      name: "2",
      description: "desc 2",
      id: 2
    }
  ]
};
let store = createStore(taskReducer, preloadState);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
