import { useState } from "react";
import { useEffect } from "react";
import { getAlltASK } from "../api/task-node";
import Task from "./Task";
import { Checkbox, Input } from "@material-tailwind/react";

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
  const handleFindTask = (e) => {
    const search = e.target.value;
    if (search === "") {
      return getAlltASK()
        .then((data) => {
          setTasks(data.data);
        })
        .catch(() => {
          setTasks(null);
        });
    } else {
      const filtered = tasks.filter((task) => task.name.includes(search));
      setTasks(filtered);
    }
  };
  const handleFilterByCompleted = (e) => {
    if (e.target.checked) {
      const filtered = tasks.filter((task) => task.status === "terminado");
      setTasks(filtered);
    } else {
      getAlltASK()
        .then((data) => {
          setTasks(data.data);
        })
        .catch(() => {
          setTasks(null);
        });
    }
  };
  const handleFilterByPending = (e) => {
    if (e.target.checked) {
      const filtered = tasks.filter((task) => task.status === "pendiente");
      setTasks(filtered);
    } else {
      getAlltASK()
        .then((data) => {
          setTasks(data.data);
        })
        .catch(() => {
          setTasks(null);
        });
    }
  }
  return loading ? (
    <p>loading</p>
  ) : tasks == null ? (
    <p>no hay tareas.</p>
  ) : (
    <section className="flex flex-col">
      <div className="w-3/4 mx-auto pb-5">
        <Input
          label="Buscar tarea.."
          color="indigo"
          onChange={handleFindTask}
        />
        <Checkbox
          color="indigo"
          label="Mostrar tareas completadas"
          onChange={handleFilterByCompleted}
        />
        <Checkbox
          color="indigo"
          label="Mostrar tareas pendientes"
          onChange={handleFilterByPending}
        />
      </div>
      <div className="grid grid-cols-3 gap-5 w-auto px-10 max-h-screen">
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </section>
  );
}
