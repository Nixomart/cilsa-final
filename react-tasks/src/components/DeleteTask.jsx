/* eslint-disable react/prop-types */
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader } from "@material-tailwind/react";
import { useState } from "react";
import { deleteTask } from "../api/task-node";

export default function DeleteTask({task}) {
    const [open, setOpen] = useState(false);
 
  const handleOpen = () => setOpen(!open);
  const handleSubmit = () =>{
    deleteTask(task.id).then((res) => {
      console.log(res);
    }
    ).catch((err) => {
      console.log(err);
    });
  }
  return (
    <>
     <Button onClick={handleOpen}  color="red" variant="gradient" className=" px-3 py-2">
        Borrar tarea
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <form onSubmit={handleSubmit}>
        <DialogHeader>borrar tarea: {task.name} ? </DialogHeader>
        <DialogBody>
        <h5 className="mb-2 text-slate-800 text-xl font-semibold">
          {task.name}
        </h5>
        <p className="text-slate-600 leading-normal font-light">
          {task.description}
        </p>
        </DialogBody>
        <DialogFooter>
          <Button

            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancelar</span>
          </Button>
          <Button
          type="submit"
          variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirmar</span>
          </Button>
        </DialogFooter>
        </form>

      </Dialog>
    </>
  )
}
