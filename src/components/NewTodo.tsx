// this component displays a form for adding new todos, then forwards the newly created todos into App.tsx

import React, { useState } from 'react'
import './NewTodo.css'

interface NewTodoProps {
    onAddTodo: (data: string) => void  // this interface expexts a key in props called onAddTodo that will be a function that return void
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
    const [todo, setTodo] = useState('')

    const todoSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault()

        if(todo.length === 0) {
            console.log('Todo Should Have a Length')
            setTodo('')
            return
        }

        props.onAddTodo(todo) // call the function in the parent component to add a new Todo Item
    }

    return (
        <form onSubmit={todoSubmitHandler}>
            <div>
                <label htmlFor='todo-text'>Todo Text</label>
                <input type='text' id='todo-text' onChange={(e) => setTodo(e.target.value)} />
            </div>
            <button type='submit'>ADD TODO</button>
        </form>
    )
}


export default NewTodo
