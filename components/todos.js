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
                    completed: todo.acf.completed,
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

    };


    useEffect(() => {
        getTodos();
    },[])

    //console.log(todos)
    return (
        <>
            <main className="container">
                <h1>Todo List</h1>
                <TodoCardList todos={todos} />
                <div styles={styles.form}>
                    <TextField id="standard-basic" label="New Todo" value={text} variant="standard" onChange={(e) => setText(e.target.value) } />
                    <Button variant="contained" onClick={() => addTodo()}>Add Todo</Button>

                </div>

            </main>

        </>
    );
}



