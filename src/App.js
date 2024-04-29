import { useRef} from 'react';
import './App.css';
import { useStore,actions } from './store';
import FunctionComponent from './store/FunctionComponent';
import ClassComponent from './store/ClassComponent';
function App() {
  const [state, dispatch] = useStore();
  const { todos, todoInput, counter, times, total, isFinish } = state;
  const inputRef = useRef()
  const handleAdd =()=>{
    dispatch(actions.addTodo(todoInput))
    dispatch(actions.setTodoInput(''))
    inputRef.current.focus()
  }
  const handleCount =()=>{
    setInterval(() => {
      dispatch(actions.startCounter());
    }, 1000);
  }
  const renegator = () => {
    let a = []
    for (let i = 1; i <= 95; i++){
      if(a.length!==0 && !a.includes(Math.floor(Math.random() * 101)))
        a.push(Math.floor(Math.random() * 101))
      if (a.length === 0) {
        a.push(Math.floor(Math.random() * 101))
      }
    }
    console.log(63 & 32)
  }
  renegator()
  return (
    <div>
      {/* <input
        ref={inputRef}
        value={todoInput}
        placeholder="Enter todo..."
        onChange={(e) => {
          dispatch(actions.setTodoInput(e.target.value));
        }}
      ></input>
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              {todo}{" "}
              <span
                onClick={() => {
                  dispatch(actions.deleteTodo(index));
                }}
              >
                &times;
              </span>
            </li>
          );
        })}
      </ul> */}
      <h1>Thời gian: {counter}</h1>
      <h2>Lần thứ/hiệp: {times} </h2>
      <h3>Hiệp thứ: {total}</h3>
      <h3>{isFinish}</h3>
      <button onClick={handleCount}>Start Counter</button>
      <FunctionComponent name ='nam'/>
      {/* <ClassComponent name ='nam'/> */}
      
    </div>
  );
}

export default App;
