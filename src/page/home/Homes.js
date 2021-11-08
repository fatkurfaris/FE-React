// import React, { useState } from 'react'
// import Todo from './Todo';
// import TodoForm from './Todoform'

// function Home() {
//     const [todos, setTodos] = useState([])

//     const addTodo = todo => {

//         const newTodos = [todo, ...todos];
        
//         setTodos(newTodos);
//     }

//     const removeTodo = id => {
//         const removeArr = [...todos].filter(todo => todo.id !== id)
        
//         setTodos(removeArr);
//     }

//     const completeTodo = id => {
//         let updatedTodos = todos.map(todo => {
//             if(todo.id === id) {
//                 todo.isComplete = !todo.isComplete
//             }
//             return todo
//         })
//         setTodos(updatedTodos);
//     }

//     return (
//         <div className='todo-app'>
//             <h1 className="text-title">todos</h1>
//             <TodoForm onSubmit={addTodo}/>
//             <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo}/>
//         </div>
//     )
// }

// export default Home;