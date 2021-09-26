const database = require("../settings");

const knex = require("knex")(database);

function TasksToDO(req, res) {
  knex
    .select("id","title","details","start_time","end_time")
    .from("tasks")
    .where("user_id", req.user.id)
    .where("status", "undone")
    .then((tasksToDO) => {
      return res.json({tasksToDO,
        total: tasksToDO.length ? tasksToDO.length : 0});
    });
}
function TasksCompleted(req, res) {
  knex
    .select("id","title","details","completed_on")
    .from("tasks")
    .where("user_id", req.user.id)
    .where("status", "done")
    .then((tasksCompleted) => {
      return res.json({tasksCompleted,
        total: tasksCompleted.length ? tasksCompleted.length:0});
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
  knex("tasks")
    .insert({ ...payload, user_id: req.user.id })
    .then(() => res.status(200).json({ alert:{type:"success",message:"You have created new task."}}))
    .catch((error) => res.status(500).json(error));
}

const markAsDone = (req, res) => {
  const  {taskId } = req.params;
  const status = req.body.status;
  const completed_on = req.body.completed_on;   
  knex("tasks")
    .where("id", taskId)
    .where("user_id", req.user.id)
    .update({status:status,completed_on:completed_on})
    .then(() => res.status(201).json({type:"success", message:"Task mark as done!"}))
    .catch(() => res.status(500).json({type:"error", message:"Unable to mark as done!"}));
};

const deletetask = (req, res) => {
  const { taskId } = req.params;
  knex("tasks")
    .where("id", taskId)
    .where("user_id", req.user.id)
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
