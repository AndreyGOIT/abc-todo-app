import TodoItem from './TodoItem';

const TodoContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      <TodoItem title="Complete React project" />
      <TodoItem title="Learn Tailwind CSS" />
      <TodoItem title="Build a todo app" />
    </div>
  );
};

export default TodoContainer;
