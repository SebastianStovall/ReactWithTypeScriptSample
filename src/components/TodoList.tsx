// this component displays the list of todos


import React from 'react'  // TS will yap in the terminal if this isnt defined (no 'isolated modules' from ts config)

// !!! IMPORTANT ---> type React.FC acts as a generic, so we can pass in additional information about what types we are passing in, so TS won't get angry at us !!!
// FOR EXAMPLE, specifiying that what our props will look like, so we can tell TS that our props object will indeed have a key on it called 'items', so it stops yapping

interface TodoListProps {
    items: {id: string, text: string}[]  // specify that props object will have an array of objects with these properties. the "props.items.map()" will now be fixed
}
                // specifiy that this React.FC (T) will take in props that adhere to an interface that has a key called items thats mappable
const TodoList: React.FC<TodoListProps> = (props) => {

    return (
        <ul>
            {props.items.map(todo => (
                <li key={todo.id}>
                    <span>
                        {todo.text}
                        {/* <button onClick={}>DELETE</button> */}
                    </span>
                </li>
            ))}
        </ul>
    )
}


export default TodoList
