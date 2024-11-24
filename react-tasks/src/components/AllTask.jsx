import { useState } from "react";
import { useEffect } from "react";
import { getAlltASK } from "../api/task-node";
import Task from "./Task";

export default function AllTask() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getAlltASK()
      .then((data) => {
        console.log("DATA: ", data.data);
        setTasks(data.data);
        setLoading(false);
      })
      .catch(() => {
        setTasks(null);
        setLoading(false);
      });
  }, []);
  return loading ? (
    <p>loading</p>
  ) : tasks == null ? <p>no hay tareas.</p> : (
    <section>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </section>
  );
}
