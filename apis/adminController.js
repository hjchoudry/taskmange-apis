const database = require("../settings");

const knex = require("knex")(database);

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
const deleteUser = (req, res) => {
  const { userId } = req.params;
  knex("users")
    .where("id", userId)
    .del()
    .then(()=>
    knex("tasks")
    .where("user_id", userId)
    .del())
    .then(()=> {return true})
    .then(() =>res.status(201).json({type:"success", message:"User Removed!"}))
    .catch(() => res.status(500).json({type:"error", message:"Unable to removed user!"}));
};

function allTasks(req, res) {
  knex
    .select("tasks.*","users.name as user_name")
    .from("tasks")
    .join("users", "tasks.user_id", "=", "users.id")
    .then((allTasks) => {
      return res.json({allTasks,
        total: allTasks.length ? allTasks.length : 0});
    }); 
}
function allUser(req, res) {
  knex
    .select("*")
    .from("users")
    .then((users) => {
      return res.json({users,
        total: users.length ? users.length : 0
      });
    }); 
}
module.exports = {
  markAsDone,
  deletetask,
  allTasks,
  allUser,
  deleteUser
};
