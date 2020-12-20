const database = require("../settings");

const knex = require("knex")(database);

function TasksToDO(req, res) {
  knex
    .select("*")
    .from("tasks")
    .where("user_id", req.user.id)
    .where("completed", "undone")
    .then((tasksToDO) => {
      return res.json(tasksToDO);
    });
}
function TasksCompleted(req, res) {
  knex
    .select("*")
    .from("tasks")
    .where("user_id", req.user.id)
    .where("completed", "done")
    .then((tasksCompleted) => {
      return res.json(tasksCompleted);
    });
}
function Task(req, res) {
  const { taskId } = req.params;
  knex
    .select("*")
    .from("tasks")
    .where("id", taskId)
    .where("user_id", req.user.id)
    .first()
    .then((task) => {
    if (task) res.status(200).json(task)
    else res.status(500).json({message:"Unable to fetch task!"})
    })
    .catch(() => res.status(500).json({message:"Unable to fetch task!"}));
}

function createTasks(req, res) {
  const payload = req.body;
  const createdat =  `${new Date()}`;  
  knex("tasks")
    .insert({ ...payload, user_id: req.user.id , created:createdat })
    .then(() => res.status(200).json({ alert:{type:"success",message:"You have created new task."}}))
    .catch((error) => res.status(500).json(error));
}

const markAsDone = (req, res) => {
  const  {taskId } = req.params;
  knex("tasks")
    .where("id", taskId)
    .update("completed", "done")
    .then(() => res.status(201).json({type:"success", message:"Task mark as done!"}))
    .catch(() => res.status(500).json({type:"error", message:"Unable to mark as done!"}));
};

const deletetask = (req, res) => {
  const { taskId } = req.params;
  knex("tasks")
    .where("id", taskId)
    .del()
    .then(() =>res.status(201).json({type:"success", message:"Task Removed!"}))
    .catch(() => res.status(500).json({type:"error", message:"Unable to removed task!"}));
};

module.exports = {
  TasksToDO,
  TasksCompleted,
  Task,
  createTasks,
  markAsDone,
  deletetask,
};
