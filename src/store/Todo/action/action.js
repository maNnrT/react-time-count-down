export const SET_JOB_INPUT = "set_job_input";
export const ADD_JOB = "add_job";
export const DELETE_JOB = "delete_job";
export const carryPayload = (payload, actionType) => {
  return {
    type: actionType,
    payload,
  };
};
