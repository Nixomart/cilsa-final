import { useState } from "react";
import { login } from "../api/login";
import { Input } from "postcss";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";

export default function Login() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = () => {
    login(user)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Button
        onClick={handleOpen}
        color="red"
        variant="gradient"
        className=" px-3 py-2"
      >
        Login
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Loguearme</DialogHeader>
        <DialogBody>
          <form
            onSubmit={handleSubmit}
            className="space-y-4 h-max w-1/3 sticky top-0 bg-white p-4 shadow-md"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Login
              </label>
              <Input
                required
                color="indigo"
                label="Nombre de la tarea"
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <div>
              <Input
                required
                color="indigo"
                label="Descripcion de la tarea"
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>
            <button
              disabled={user.email === "" || user.password === ""}
              type="submit"
              className={`inline-flex  ${
                user.email === "" || user.password === ""
                  ? "cursor-not-allowed"
                  : "cursor-pointer"
              } justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
            >
              Loguearme
            </button>
          </form>
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
            variant="gradient"
            color="green"
            onClick={handleOpen}
          >
            <span>Confirmar</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
