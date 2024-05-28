import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';


function Todo({ todo, updateTodo }) {

    const handleCheckboxChange = () => {
        updateTodo(todo.id, !todo.completed);
    };
    console.log(todo);
    const textStyle = {
        textDecoration: todo.completed ? 'line-through' : 'none'
    };

    return  (    
        <Card variant="outlined" style={{ margin: '8px 0' }}>
            <CardContent style={{ display: 'flex', alignItems: 'center' }}>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={todo.completed}
                            onChange={handleCheckboxChange}
                        />
                    }
                    label={<Typography variant="body1" style={textStyle}>{todo.name}</Typography>}
                />
            </CardContent>
        </Card>
    ) ;
}


export default Todo;