import { render, screen } from '@testing-library/react';
import NewToDo from '../components/newToDo';

test('renders the submit button', () => {
    render(<NewToDo />);
    expect(screen.getByRole('button')).not.toBeDisabled()
});

test('renders the input placeholder text', () => {
    render(<NewToDo />);
    expect(screen.getByPlaceholderText('What do you need to-do?')).toBeInTheDocument()
});