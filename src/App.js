import Uncomplete from "./Uncomplete";
import Complete from "./Complete";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const task = [
    { content: "complete todo app", isComplete: true },
    { content: "seperate two complete", isComplete: true },
    { content: "use redux", isComplete: false },
    { content: "use rouing", isComplete: false }
  ];
  const [data, setdata] = useState(task);
  const [input, setinput] = useState("");
  localStorage.setItem("task", JSON.stringify(data));
  function update(arr) {
    setdata(arr);
    localStorage.setItem("task", JSON.stringify(arr));
  }
  return (
    <div className="App">
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setinput(e.target.value);
          }}
        />
        <button
          onClick={() => {
            if (input.length > 1) {
              setdata([...data, { content: input, isComplete: false }]);
              setinput("");
            } else {
              alert("enter the task");
            }
          }}
        >
          add
        </button>
      </div>
      <hr />
      <div className="mainC">
        <Complete update={update} />
        <Uncomplete update={update} />
      </div>
    </div>
  );
}
