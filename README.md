# Task Manager

# Basic Task Management application develop in Nodejs.

# Technologies Used

- Nodejs.
  Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.

- SQLLite
  SQLite is an in-process library that implements a self-contained, serverless, zero-configuration, transactional SQL database engine. The code for SQLite is in the public domain and is thus free for use for any purpose, commercial or private. SQLite is the most widely deployed database in the world with more applications than we can count, including several high-profile projects.

\_ ExpressJs

Running applications.
Make sure node js & yarn is installed in system.

1. npm install

2. npm start


 # Here all APIs
 # use base Ulr with these Apis
 
 # post Apis
  "/login"
  "/logout"
  "/register"

 #  get Apis
  "/tasks-to-do" 
  "/tasks-completed"
  "/task/:taskId"

#  post Api
  "/add-task"

# patch
  "/mark/:taskId"

# delete
  "/delete/:taskId"

# post
  "/edit-name",
  "/change-password"

 # delete
  "/delete-account"

 # for admin
  # get
  "/admin/all-tasks"
  # patch
  "/admin/mark/:taskId"
  
  # delete
  "/admin/delete-task/:taskId"

 # get
  "/admin/all-users"

 # delete
  "/admin/delete-user/:userId"