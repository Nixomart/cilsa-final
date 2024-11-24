/* eslint-disable react/prop-types */
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import { useState } from "react";
import { updateTask } from "../api/task-node";

export default function UpdateTask({ task }) {
  const [open, setOpen] = useState(false);
  const [taskUpdated, setTaskUpdated] = useState(task);
  const handleSubmit = () => {
    updateTask(task.id, taskUpdated)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleOpen = () => setOpen(!open);
  return (
    <>
      <Button onClick={handleOpen} color="green" variant="gradient">
        EDITAR TAREA
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <form onSubmit={handleSubmit}>
          <DialogHeader>Actualiar tarea: {task.name} ? </DialogHeader>
          <DialogBody>
            <h5 className="mb-2 text-slate-800 text-xl font-semibold">
              {task.name}
            </h5>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Status
              </label>
              <select
                onChange={(e) =>
                  setTaskUpdated({ ...taskUpdated, status: e.target.value })
                }
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="pendiente">Pendiente</option>
                <option value="terminado">Terminado</option>
                <option value="asignado">Asignado</option>
              </select>
            </div>
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={handleOpen}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
            <Button
              type="submit"
              variant="gradient"
              color="green"
              onClick={handleOpen}
            >
              <span>Confirm</span>
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </>
  );
}
