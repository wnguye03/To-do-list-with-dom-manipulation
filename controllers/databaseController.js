const db = require('../models/databaseModel');

const controller = {};

controller.getAllTask = (req, res, next) => {
    const user = req.params.user;
    const queryString = `
    SELECT * 
    FROM posts
    JOIN users 
    ON posts.username = users.username
    WHERE users.username = $1`;
    const values = [user];
    db.query(queryString, values)
      .then((data) => {
        res.locals.tasks = data.rows;
        return next(); 
      })
      .then(() => next())
      .catch((err) => {
        next({
            log: `Error encountered in databaseController.getAllTask, ${err}`,
            message: 'Error encountered when querying the database.',
        })
      });   
}

controller.deleteTask = (req, res, next) => {
    const id = req.params.id;
    const queryString = `
    DELETE from posts where id = $1`;
    const values = [parseInt(id)];
    db.query(queryString, values)
      .then((data) => {
        return next();
      })
      .catch((err) => {
        next({
            log: `Error encountered in databaseController.deleteTask, ${err}`,
            message: 'Error encountered when querying the database.'
        })
      })
}

controller.updateTask = (req, res, next) => {
    const id = req.params.id;
    const { username, message } = req.body;
    const values = [username, message, parseInt(id)];
    const queryString = `
    UPDATE posts
    SET username = $1, message = $2
    WHERE id = $3 
    RETURNING *`
    db.query(queryString, values)
      .then((data) => {
        res.locals.updatedTask = data.rows[0];
        return next();
      })
      .catch((err) => {
        next({
            log: `Error encountered in databaseController.updateTask, ${err}`,
            message: 'Error encountered when querying the database.',  
        })
      })
}

controller.createTask = (req, res, next) => {
    const { message, user } = req.body;
    const values = [user, message];
    const queryString = `
    INSERT INTO posts (username, message) VALUES($1, $2)`;
    db.query(queryString, values)
      .then((data) => {
        res.locals.newTask = data.rows[0];
        return next();
      })
      .catch((err) => {
        next({
            log: `Error encountered in databaseController.createTask, ${err}`,
            message: 'Error encountered when querying the database.',
        })
      }) 
}

module.exports = controller;