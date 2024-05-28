import TodoCard from '../TodoCard/todo-card'
import {CardContent, Container} from '@mui/material';

function TodoCardList({ todos, updateTodo }) {
    return (
        <Container maxWidth="sm" sx={{mt: 4}}>
            <CardContent>
                {todos.map((todo) => (
                    <TodoCard key={todo.id} todo={todo} updateTodo={updateTodo} />
                ))}
            </CardContent>
       </Container>
   )
 
}

export default TodoCardList;