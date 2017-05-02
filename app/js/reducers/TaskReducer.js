import {ADD_TASK, REMOVE_TASK} from "../actions/TaskActionsTypes";
let initialState = [];

function getEveryTaskButWithId(state, action) {
  return state.tasks.filter(
    function (el) {
      console.log(el.id);
      return el.id !== action.id
    });
}

export function taskReducer(state, action) {
  console.log(action);
  if (state === undefined) {
    return initialState;
  }

  switch (action.type) {
    case ADD_TASK: {
      console.log("ADD TASK");
      break;
    }
    case REMOVE_TASK : {
      let filteredTasks = getEveryTaskButWithId(state, action);
      return Object.assign({}, state, {
        tasks: filteredTasks
      })
    }
  }

  return state;
}
