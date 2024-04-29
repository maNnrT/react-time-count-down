import {
  SET_JOB_INPUT,
  ADD_JOB,
  DELETE_JOB,
} from "../action/action";

export const reducer = (state, action) => {
  console.log("Action:", action);
  console.log("pre:", state);
  let newState;
  switch (action.type) {
    case SET_JOB_INPUT:
      newState = {
        ...state,
        jobInput: action.payload,
      };
      break;
    case ADD_JOB:
      newState = {
        ...state,
        jobList: [...state.jobList, action.payload],
      };
      break;
    case DELETE_JOB:
      const newJobList = [...state.jobList];
      newJobList.splice(action.payload, 1);
      newState = {
        ...state,
        jobList: [...newJobList],
      };
      break;
    default:
      throw new Error();
  }
  console.log("new:", newState);
  return newState;
};
