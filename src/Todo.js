import { useEffect, useState } from "react";

export default function (props) {
  const { content, isComplete, update } = props;
  const [done, setdone] = useState();
  const [color, setcolor] = useState();
  const data = JSON.parse(localStorage.getItem("task"));
  // const [task, settask] = useState(data);
  useEffect(() => {
    if (isComplete) {
      setdone("done");
      setcolor("green");
    } else {
      setcolor("red");
      setdone("do");
    }
  }, [done, color]);

  return (
    <div>
      <p>{content}</p>
      <div>
        <button
          style={{ color: color }}
          onClick={() => {
            const newt = data.map((e) => {
              if (e.content === content) {
                e.isComplete = !e.isComplete;
              }
              return e;
            });
            // settask(newt);
            update(newt);
          }}
        >
          {done}
        </button>
        <button
          onClick={() => {
            const newd = data.filter((e) => {
              return e.content !== content;
            });
            update(newd);
          }}
        >
          {" "}
          remove
        </button>
      </div>
    </div>
  );
}
