import Todo from "./Todo";

export default function ({ update }) {
  const task = JSON.parse(localStorage.getItem("task"));
  const data = task.filter((e) => {
    return e.isComplete;
  });
  return (
    <div className="left">
      <h1>complete task ({data.length})</h1>
      {data.map((e) => {
        return (
          <Todo content={e.content} isComplete={e.isComplete} update={update} />
        );
      })}
    </div>
  );
}
