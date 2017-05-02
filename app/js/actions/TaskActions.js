import {ADD_TASK} from "./TaskActionsTypes";

export function addTask(title) {
  return {
    type: ADD_TASK,
    data: title
  }
}
