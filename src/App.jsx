import Header from './components/Header'
import Footer from './components/Footer'
import TodoContainer from './components/TodoContainer';
import TodoItem from './components/TodoItem';
import './App.css'

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <TodoContainer>
        <TodoItem text="Complete React project" />
        <TodoItem text="Learn Tailwind CSS" />
        <TodoItem text="Build a todo app" />
      </TodoContainer>
      <Footer />
    </div>
  )
}

export default App
