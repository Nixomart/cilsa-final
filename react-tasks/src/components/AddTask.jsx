import { useState } from "react";
import { createTask } from "../api/task-node";
import { Input } from "@material-tailwind/react";
import DialogErrr from "./DialogErrr";
  export default function AddTask() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const handleOpen = () => setOpen(!open);
  const [task, setTask] = useState({
    name: "",
    status: "pendiente",
    description: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault()
    if (task.name == "" || task.description == "") {
      console.log("ENTRA POR ACA");
      setMessage("Por favor llena todos los campos");
      handleOpen();
      return;
    }else{
      console.log("ENTRA POR ACA FORM TIENE DATOS");
      
      createTask(task)
        .then((res) => {
          console.log(res);
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
          window.location.reload();
        });
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 h-max w-1/3 sticky top-0 bg-white p-4 shadow-md"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Agregar tarea
        </label>
        <Input
          color="indigo"
          label="Nombre de la tarea"
          type="text"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        />
      </div>
      <div>
        <Input
        
          color="indigo"
          label="Descripcion de la tarea"
          type="text"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          onChange={(e) => setTask({ ...task, description: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Estado
        </label>
        <select
          onChange={(e) => setTask({ ...task, status: e.target.value })}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="pendiente">Pendiente</option>
          <option value="terminado">Terminado</option>
          {/* <option value="asignado">Asignado</option> */}
        </select>
      </div>
      <button
        /* disabled={task.name === "" || task.description === ""} */
        type="submit"
        className={`inline-flex  ${task.name === "" || task.description === "" ? "cursor-not-allowed" : "cursor-pointer"} justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
      >
        Añadir Tarea
      </button>
      <DialogErrr handleOpen={handleOpen} open={open} message={message} />
     {/*  <Login /> */}
    </form>
  );
}
