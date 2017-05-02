import {ADD_TASK, REMOVE_TASK} from "./TaskActionsTypes";

export function addTask(title) {
  return {
    type: ADD_TASK,
    data: title
  }
}

export function deleteTask(id) {
  return {
    type: REMOVE_TASK,
    id: id
  }
}
