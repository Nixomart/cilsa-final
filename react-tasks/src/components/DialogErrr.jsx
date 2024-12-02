import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";

// eslint-disable-next-line react/prop-types
export default function DialogErrr({ open, handleOpen, message }) {
  return (
    <Dialog open={open} handler={handleOpen}>
      <DialogHeader>Ocurrio un error </DialogHeader>
      <DialogBody>
        <div>
          <p>
            {
                message
            }
          </p>
        </div>
      </DialogBody>
      <DialogFooter>
      {/*   <Button
          variant="text"
          color="red"
          onClick={handleOpen}
          className="mr-1"
        >
          <span>Cancelar</span>
        </Button> */}
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
  );
}
