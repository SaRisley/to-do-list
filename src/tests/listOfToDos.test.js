import { render, screen } from '@testing-library/react';
import ListOfToDos from '../components/listOfToDos';

test('renders a list of toDos', () => {
    const sampleTodos = [
        { id: 1, task: 'Task 1', complete: false },
        { id: 2, task: 'Task 2', complete: true },
    ];
    
    render(<ListOfToDos toDoList={sampleTodos} />);
    
    expect(screen.getByText('Task 1')).toBeInTheDocument();
});
