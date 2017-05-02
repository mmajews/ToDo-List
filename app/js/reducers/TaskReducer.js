import {ADD_TASK, REMOVE_TASK} from "../actions/TaskActionsTypes";
let initialState = [];

export function taskReducer(state, action) {
  console.log(state);
  if (state === undefined) {
    return initialState;
  }
  let newState = state;
  switch (action.type) {
    case ADD_TASK: {
      console.log("ADD TASK");
      break;
    }
    case REMOVE_TASK : {
      console.log("DELETE TASK")
    }

  }
  return newState;
}
