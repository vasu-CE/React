import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [showBtn, setShowBtn] = useState(false);
  const [todos, settodos] = useState([
    {
      title: "hey",
      desc: "I am a good todo",
    },
    {
      title: "hey another todp",
      desc: "I am a good todo 2",
    },
    {
      title: "hey i am third",
      desc: "I am also good todo",
    },
  ]);
  const Todo = ({ todo }) => {
    return (
      <>
        <div className="todo">{todo.title}</div>
        <div className="todo">{todo.desc}</div>
      </>
    );
  };
  return (
    <>
      {/* { showBtn?<button>I saw cause' it was clicked</button> : "opps!!"} */}
      {showBtn && <button>I saw cause' it was clicked</button>}

      {todos.map((item) => {
        return <Todo todo={item} />;
      })}
      <div className="card">
        <button onClick={() => setShowBtn(!showBtn)}>count is {count}</button>
      </div>
    </>
  );
}

export default App;
