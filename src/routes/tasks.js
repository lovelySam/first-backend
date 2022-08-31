const express = require('express');
const router = express.Router();
const Task = require('../models/Tasks')



router.get("/", async (req, res) => {
    const tasks = await Task.find();
    res.status(200).json({ tasks });
})

router.post("/", async (req, res) => {
    const task = await Task.create(req.body)
    res.status(200).json(task);
})


router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const task = await Task.findById(id);
    if (!task) {
        return res.status(400).json({ message: "Task not found", tasks: [] })
    }
    res.status(200).json(task);
})

router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const task = await Task.findOneAndUpdate({ _id: id }, req.body, {
        new: true,
        runValidators: true,
    })
    if (!task) {
        return res.status(400).json({ message: "Task not found", tasks: [] })
    }
    res.status(200).json({ task });
})


router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const task = await Task.findOneAndDelete({ _id: id });
    if (!task) {
        return res.status(404).json({ message: "No Task with given Id" })
    }
    res.status(200).json({ task });
})


module.exports = router;