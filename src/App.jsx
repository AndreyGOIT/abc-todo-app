import { useState } from 'react';
import Header from './components/Header';
import TodoContainer from './components/TodoContainer';
import TodoItem from './components/TodoItem';
import Footer from './components/Footer';
import './App.css'

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Complete React project', description: 'Finish the todo app using React and Tailwind' },
    { id: 2, title: 'Learn Tailwind CSS', description: 'Master the utility-first CSS framework' },
    { id: 3, title: 'Implement state management', description: 'Add robust state management to the app' },
    { id: 4, title: 'Write unit tests', description: 'Ensure code quality with comprehensive unit tests' },
    { id: 5, title: 'Deploy to production', description: 'Set up CI/CD and deploy the app to a hosting service' },
  ]);

  const updateTodo = (id, newDescription) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, description: newDescription } : todo
    ));
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-mist">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <TodoContainer>
          {todos.map(todo => (
            <TodoItem 
              key={todo.id}
              title={todo.title}
              initialDescription={todo.description}
              onUpdate={(newDescription) => updateTodo(todo.id, newDescription)}
            />
          ))}
        </TodoContainer>
      </main>
      <Footer />
    </div>
  );
};

export default App