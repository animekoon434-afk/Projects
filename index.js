const express = require('express')

const app = express();

const todoArr = [
    { id: 1, task: 'Learn JavaScript', Status : 'true' },
    { id: 2, task: 'Build a to-do app', Status : 'false' },
    { id: 3, task: 'Test the app', Status : 'true' }
];


app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({message: 'Hello world!'});
});

app.get('/todos', (req, res) => {
    res.json(todoArr);
});


app.post('/todos', (req, res) => {
    const todo  = req.body;

    if(!todo.task){
        return res.status(400).json({error: 'Task is required'});
    }

    if(!todo.Status){
        return res.status(400).json({error: 'Status is required'});
    }

    todoArr.push({
        id: todoArr[todoArr.length - 1].id + 1,
        task: todo.task,
        Status: todo.Status
    });
    res.status(201).json({
        success: true,
        data: todoArr
    });
});

app.get('/todos/:id',  (req, res) => {
    const todoId = parseInt(req.params.id);
    const todoItem = todoArr.find(todo => todo.id === todoId);
    if(!todoItem){
        return res.status(404).json({error: 'Todo not found'})
    }
    res.json({
        success: true,
        data : todoItem
    })
});

app.put('/todos/:id', (req, res) => {
    const todoId = parseInt(req.params.id);
    const data = req.body;
    const todoItem = todoArr.find(todo => todo.id === todoId);
    if(!todoItem){
        return res.status(404).json({error: 'Todo not found'});
    }

    if(!data.task || !data.Status){
        return res.status(400).json({error: 'Task and Status are required'});
    }

    todoItem.task = data.task;
    todoItem.Status = data.Status;
    res.json({
        success: true,
        data: todoArr
    });
});

app.delete('/todos/:id', (req, res) => {
    const todoId = parseInt(req.params.id);
    const todoIndex = todoArr.findIndex(todo => todo.id === todoId);
    if(todoIndex === -1){
        return res.status(404).json({error: 'Todo not found'});
    }
    todoArr.splice(todoIndex, 1);
    res.status(200).json({
        message: 'Todo deleted successfully',
        data: todoArr
    });
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port: http://localhost:${PORT}`);
});
