import { SET_TODO_INPUT } from "./constants"
import { ADD_TODO } from "./constants"
import { DELETE_TODO } from "./constants";
import { START_COUNTER } from "./constants";
const initStates = {
  todos: [],
  todoInput: "",
  counter: 0,
  times: 1,
  total: 1,
  isFinish: "",
};
function reducer(state,action) {
    switch (action.type) {
      case SET_TODO_INPUT:
        return {
          ...state,
          todoInput: action.payload,
        };
      case ADD_TODO:
        return {
          ...state,
          todos: [...state.todos, action.payload],
        };
      case DELETE_TODO:
        const newTodos = [...state.todos]
        newTodos.splice(action.payload,1)
        return {
          ...state,
          todos: newTodos,
        };
        case START_COUNTER:
          if (state.counter < 32) {
            return {
              ...state,
              counter: state.counter +1,
            };
          }
          if (state.counter === 32){
            if (state.times < 21) {
              return {
                ...state,
                counter: 0,
                times: state.times + 1,
              };
            }
            if (state.times === 21) {
              if (state.total < 8) {
                return {
                  ...state,
                  counter: 0,
                  times: 1,
                  total: state.total + 1,
                };
              }
              if (state.total === 8) {
                return {
                  ...state,
                  counter: 0,
                  times: 0,
                  isFinish: "Đã xong",
                };
              }
            }
          }
          break;
      default:
        throw new Error("Invalid action.");
    }
}
export {initStates}
export default reducer