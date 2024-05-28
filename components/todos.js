'use client';
import TodoCardList from "./TodoCardList/todo-card-list"
import { useState, useEffect } from 'react';
import { restClient } from '../data/wp-client';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import styles from './todos.module.css';

export default function Todo() {
    const [todos, setTodos] = useState([]);
    const [error, setError] = useState(null);
    const [text, setText] = useState('');

    const getTodos = async () => {
        try {
            const response = await restClient.get('/wp/v2/todo');
            console.log("Get Todo Response:", response.data)
            const tds = response.data.map((todo) => {
                return {
                    id: todo.id,
                    name: todo.acf.task,
                    completed: todo.acf.done,
                };
            });
            setTodos(tds);
            
        } catch (err) {
            setError(err);
            console.error("Get Todo Error:", err);
        }
    };

    const addTodo = async () => {
        console.log("Text: ", text)
        try {
            const response = await restClient.post('/wp/v2/todo', {
                status: 'publish',
                title: {
                    raw: text,
                    rendererd: text,
                },
                acf: {
                    task: text,
                    completed: false,
                }
            });
            console.log("Add Todo Response:", response.data)
            const newTodo = {
                id: response.data.id,
                name: response.data.acf.task,
                completed: response.data.acf.done,
            };
            setTodos([...todos, newTodo]);
        } catch (err) {
            setError(err);
            console.error("Add Todo Error:", err);
        }
    };

    const updateTodo = async (id, completed) => {
        try {
            const response = await restClient.post(`/wp/v2/todo/${id}`, {
                acf: {
                    done: completed
                }
            });
            console.log("Update Todo Response:", response.data)
            const updatedTodos = todos.map((todo) => {
                if (todo.id === id) {
                    return {
                        id: todo.id,
                        name: todo.name,
                        completed: completed
                    };
                }
                return todo;
            });
            setTodos(updatedTodos);
        } catch (err) {
            setError(err);
            console.error("Update Todo Error:", err);
        }
    }


    useEffect(() => {
        getTodos();
    },[])

    //console.log(todos)
    return (
        <>
            <main className="container">
                <h1>Todo List</h1>
                <TodoCardList todos={todos} updateTodo={updateTodo} />
                <div styles={styles.form}>
                    <TextField id="standard-basic" label="New Todo" value={text} variant="standard" onChange={(e) => setText(e.target.value) } />
                    <Button variant="contained" onClick={() => addTodo()}>Add Todo</Button>

                </div>

            </main>

        </>
    );
}



