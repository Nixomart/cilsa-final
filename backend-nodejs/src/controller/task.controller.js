import  {Task}  from "../models/Task.js";
export const getTasks = async (req, res) => {
    const tasks = await Task.findAll();
    res.json(tasks);
}
export const getTaskById = async (req, res) => {
    const task = await Task.findByPk(req.params.id);
    res.json(task);
}
export const createTask = async (req, res) => {
    const task = await Task.create(req.body);
    res.json(task);
}
export const updateTask = async (req, res) => {
    await Task.update(req.body, {
        where: { id: req.params.id },
    });
    res.json({ message: "Task updated" });
}
export const deleteTask = async (req, res) => {
    await Task.destroy({
        where: { id: req.params.id },
    });
    res.json({ message: "Task deleted" });
}
