const dbController = require('../controllers/databaseController');
const router = require('express').Router();

router.get('/allTask/:user', dbController.getAllTask, (req, res) => {
    res.status(200).json(res.locals.tasks);
});

router.post('/task', dbController.createTask, (req, res) => {
    res.status(200).json(res.locals.newTask);
});

router.put('/updateTask/:id', dbController.updateTask, (req, res) => {
    res.status(200).json(res.locals.updatedTask);
});

router.delete('/deleteTask/:id', dbController.deleteTask, (req, res) => {
    res.status(200).json('task successfully deleted');
});

module.exports = router;
