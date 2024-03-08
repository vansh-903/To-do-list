
    import React, { useState } from 'react';
    import './Todo.css';
    
    function Task({ task, index, completeTask, removeTask }) {
        return (
            <div
                className="task"
                style={{ textDecoration: task.completed ? "line-through" : "" }}
            >
                {task.title}
                <button style={{ background: "red" }} onClick={() => removeTask(index)}>Remove</button>
                <button onClick={() => completeTask(index)}>Complete</button>
            </div>
        );
    }


    function CreateTask({ addTask }) {
        const [value, setValue] = useState("");
    
        const handleSubmit = e => {
            e.preventDefault();
            if (!value) return;
            
            addTask(value);
            setValue("");
        }
        
        return (
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="input"
                    value={value}
                    placeholder="Add a new task"
                    onChange={e => setValue(e.target.value)}
                />
            </form>
        );
    }
    
    function Todo() {
        const [tasks, setTasks] = useState([
            {
                title: "College assignment",
                completed: false
            },
            {
                title: "Do your workout",
                completed: false
            },
            {
                title: "Hangout with friends",
                completed: false
            }
        ]);
    
        const addTask = title => {
            const newTasks = [...tasks, { title, completed: false }];
            setTasks(newTasks);
        };
    
        const completeTask = index => {
            const newTasks = [...tasks];
            newTasks[index].completed = true;
            setTasks(newTasks);
        };
    
        const removeTask = index => {
            const newTasks = [...tasks];
            newTasks.splice(index, 1);
            setTasks(newTasks);
        };
    
        return (
            <div className="todo-container">
                <div className="header"><b>TODO - ITEMS</b></div>
                <div className="tasks">
                    {tasks.map((task, index) => (
                        <Task
                        task={task}
                        index={index}
                        completeTask={completeTask}
                        removeTask={removeTask}
                        key={index}
                        />
                    ))}
                </div>
                <div className="create-task" >
                    <CreateTask addTask={addTask} />
                </div>
            </div>
        );
    }

    export default Todo;
