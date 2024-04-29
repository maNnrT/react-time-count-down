import React, { useReducer, useRef} from 'react'
import "./FunctionComponent.scss";

//intiState
import { initState } from './Todo/initState/initState';

// action
import {
  SET_JOB_INPUT,
  ADD_JOB,
  DELETE_JOB,
  carryPayload,} 
from './Todo/action/action'

//reducer
import {reducer} from './Todo/reducer/reducer'

function FunctionComponent({name}) {
  const [state,dispatch] = useReducer(reducer, initState)
  const {jobInput,jobList} = state
  const inputRef = useRef()
  return (
    <div>
      <header>
        <p>Day la header</p>
      </header>
      <section>
        <p>TODO</p>
        <input
          ref={inputRef}
          type="text"
          value={jobInput}
          onChange={(e) =>
            dispatch(carryPayload(e.target.value, SET_JOB_INPUT))
          }
        />
        <button
          onClick={() => {
            dispatch(carryPayload(jobInput, ADD_JOB));
            dispatch(carryPayload("", SET_JOB_INPUT));
            inputRef.current.focus()
          }}
        >
          add
        </button>
        <ul>
          {jobList.map((job, key) => (
            <li key={key}>
              {job}{" "}
              <span onClick={() => dispatch(carryPayload(job, DELETE_JOB))}>
                &times;
              </span>
            </li>
          ))}
        </ul>
      </section>
      <footer>
        <p>footer</p>
        <button>Contact</button>
      </footer>
    </div>
  );
}

export default FunctionComponent