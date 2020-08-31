import React, {useState} from 'react';
import './App.css';
import {Container, Row, Alert} from 'reactstrap';
import Column from "./Column";
import AddTaskModal from "./AddTaskModal";


function App() {
    const taskList = [
        {id: Math.random(), name: "First task...", priority: 0, status: "todo"},
        {id: Math.random(), name: "Second task...", priority: 1, status: "progress"},
        {id: Math.random(), name: "Third task...", priority: 2, status: "review"},
        {id: Math.random(), name: "Fourth task...", priority: 2, status: "done"}
    ]

    const columnList = [
        {id: Math.random(), title: "To do:", status: "todo"},
        {id: Math.random(), title: "In progress:", status: "progress"},
        {id: Math.random(), title: "Need review:", status: "review"},
        {id: Math.random(), title: "Done!", status: "done"}
    ]


    const [tasks, setTasks] = useState(taskList);
    const statuses = ['todo', 'progress', 'review', 'done'];
    const taskPriority = [0, 1, 2];

    const addNewTask = (newTitle, newPriority, newStatus) => {
        const newTask = {id: Math.random(), name: newTitle, priority: newPriority, status: newStatus}
        setTasks([...tasks, newTask])
    }

    const changeTaskStatus = (taskId, direction) => {
        const newTask = tasks.map(el => {
            if (el.id === taskId) {
                if (direction === 'right') el.status = statuses[statuses.indexOf(el.status) + 1]
                if (direction === 'left') el.status = statuses[statuses.indexOf(el.status) - 1]
                if (direction === 'up') el.priority = taskPriority[taskPriority.indexOf(el.priority) + 1]
                if (direction === 'down') el.priority = taskPriority[taskPriority.indexOf(el.priority) - 1]
            }
            return el
        })
        setTasks(newTask);
    }

    const deleteTask = (taskId) => {
        const newTasks = tasks.filter(el => el.id !== taskId)
        setTasks(newTasks)
    }

    return (
        <div>
            <Alert color="dark">
                <h1> Kanban Board </h1>
            </Alert>
            <Container>

                <AddTaskModal addNewTask={addNewTask}/>
                <Row>
                    {columnList.map(el => <Column changeTaskStatus={changeTaskStatus} column={el} tasks={tasks}
                                                  deleteTask={deleteTask}/>
                    )}
                </Row>
            </Container>
        </div>
    );
}

export default App;
