/* eslint-disable react/prop-types */
import DeleteTask from "./DeleteTask";
import UpdateTask from "./UpdateTask";
export default function Task({ task }) {
  return (
    <div className="relative flex flex-col bg-white shadow-sm border border-slate-200 border-gray-300 ">
      <div className="py-4 px-0">
        <h5 className="mb-2 text-slate-800 text-xl font-semibold">
          {task.name}
        </h5>
        <p className="text-slate-600 leading-normal font-light">
          {task.description}
        </p>
        <p>{task.status}</p>
        {task != undefined && (
          <div className="space-y-3">
            <DeleteTask task={task} />
            <UpdateTask task={task} />
          </div>
        )}
      </div>
    </div>
  );
}
