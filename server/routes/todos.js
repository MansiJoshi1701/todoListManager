const router = require('express').Router();

let ToDo = require('../models/ToDo'); //this is my model (of my schema)

//Get all ToDo items
router.get('/', async (req,res) => {

    try{
        const allToDos  = await ToDo.find();
        res.status(200).json(allToDos);
    }
    catch{
        res.status(400).json('Error: ' + err);
    }
    
});

//Add a new ToDo item
router.post('/add' , async (req,res) => {

    const text = req.body.text;
    const newToDo = new ToDo({text});

    try{
        await ToDo.save(newToDo);
        res.status(200).json('ToDo item added!');
    }
    catch(err) {
        res.status(400).json('Error: ' + err);
    }
})

//Delete a ToDo item
router.delete('/:id' , async (req,res) => {

    const id = req.params.id;

    try{
        await ToDo.findByIdAndDelete(id);
        res.status(200).json('To-Do item deleted!')
    }
    catch(err) {
        res.status(400).json('Error: ' + err);
    }
})

//Update a ToDo item
router.post('/update/:id' , async (req,res) => {

    try{
        const itemToBeUpdated = await ToDo.findByIdAndUpdate(req.params.id , req.body.text);
        itemToBeUpdated.completed = req.body.completed;
        await itemToBeUpdated.save();
        res.status(200).json('To-Do item updated');
    }
    catch(err) {
        res.status(400).json('Error: ' + err);
    }

})

module.exports = router;



