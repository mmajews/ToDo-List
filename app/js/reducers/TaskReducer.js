import {ADD_TASK, REMOVE_TASK} from "../actions/TaskActionsTypes";
let initialState = [];

function getEveryTaskButWithId(tasks, id) {
  return tasks.filter(
    function (el) {
      return el.id !== id
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
      let filteredTasks = getEveryTaskButWithId(state.tasks, action.id);
      console.log(filteredTasks);
      return Object.assign({}, state, {
        tasks: filteredTasks
      })
    }
  }

  return state;
}
