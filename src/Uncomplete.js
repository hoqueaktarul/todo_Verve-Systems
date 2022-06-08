import Todo from "./Todo";

export default function ({ update }) {
  const data = JSON.parse(localStorage.getItem("task"));
  const newdata = data.filter((e) => {
    return !e.isComplete;
  });

  return (
    <div className="right">
      <h1>panding task({newdata.length})</h1>
      <div>
        {newdata.map((e) => {
          return (
            <Todo
              content={e.content}
              isComplete={e.isComplete}
              update={update}
            />
          );
        })}
      </div>
    </div>
  );
}
