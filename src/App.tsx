// this component displays all information regarding todos

import React, {useState} from 'react'
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { Todo } from './todo.model' // defines what a Todo object should look like

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])  // !!! useState in TS will be a generic !!!, need to provide more info to TS what our state should hold !!!

  function todoAddHandler(data: string) { // add the new todo to the Todo State Array when a new todo is added from the NewTodo form
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: data },
  ]);
  }

  const todoDeleteHandler = (todoId: string) => {  // delete the todo you target when clicking 'delete' button in TodoList.tsx
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id !== todoId) // return all todos that dont match the todoId your passing in... which gets rid of that todo
    })
  }

  return (
    <div>
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
}

export default App;



// -------------------------------------------------------------------------------------------------------------------------------------------------------------------- //


// in the udemy video, a react functional component was typecasted like this:

// import React from 'react'

// const App: React.FC = () => {   <------ FC stands for Function Component
//   return (
//     <div>

//     </div>
//   );
// }



// You Could also Define your Components like this (this is how it came out of the box with the TS template):

// function App() {
//   return (
//     <div>

//     </div>
//   );
// }
