import { render, screen } from '@testing-library/react';
import Toolbar from '../components/toolbar';

test('renders the correct number of outstanding tasks', () => {
    const sampleTodos = [
        { id: 1, task: 'Task 1', complete: false },
        { id: 2, task: 'Task 2', complete: true },
    ];
    
    render(<Toolbar toDoList={sampleTodos} />);
    
    expect(screen.getByText('Still to do: 1')).toBeInTheDocument();
});
