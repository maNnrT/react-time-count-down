import { SET_TODO_INPUT } from "./constants";
import { ADD_TODO } from "./constants";
import { DELETE_TODO } from "./constants";
import { START_COUNTER } from "./constants";
export const setTodoInput = payload=>{
    return {
        type:SET_TODO_INPUT,
        payload
    }
}
export const addTodo = payload=>{
    return {
      type: ADD_TODO,
      payload,
    };
}
export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};
export const startCounter = () => {
  return {
    type: START_COUNTER,
  };
};

