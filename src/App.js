import './App.css';
import {useState} from 'react'

function App() {
  const [todoList, setTodoList] = useState([])
  const [form, setForm] = useState ({
    todo: '',
    status : false
  })

  const resetInput =() => {
    setForm({
      todo: '',
      status: false
    })
  }

  const handleChange =(e) => {
    setForm({
      ...form,
      todo: e.target.value,
      status: false
    })
  }

  const handleSubmit =(e) => {
    e.preventDefault();
    console.log(form.index);
    if(form.index || form.index===0){
      const newTodo = todoList.map((e,i)=>{
        if(i===form.index){
          return form
        }else{
          return e
        }
      })
      setTodoList(newTodo)
    }else{
      setTodoList([
        ...todoList,
        form
      ])
    }
    resetInput()
  }

  const handleCheck = (index) => {
    const newTodo = todoList.map((e,i) => {
      if(i===index){
        return {
          todo: e.todo,
          status :true
        }
      }else{
        return e
      }
    })
    setTodoList(newTodo)
  }
  
const handleDelete = (index) => {
  const newTodo = todoList.filter((e,i) => {
    if (i!==index) {
      return e
    }
  })
  setTodoList(newTodo)
}

const handleEdit = (index) => {
  const detailTodo = {
    index,
    ...todoList[index]
  }
  setForm(detailTodo)
}

  return (
    <div>
      <div className="posisi">
        <h1>To Do List</h1>
        <form className="form" method="post" onSubmit={handleSubmit} >
          <input type="text" name="todo" value={form.todo} onChange={handleChange} placeholder="Add todo..."/> 
          <button className="btn-submit" type="submit">Submit</button>
        </form>
      </div>
      <div className="content">
          {
            todoList.map((e,i)=>(
              <div key={i} className="card">
                <div className="action">
                  <input type="checkbox" checked={e.status?true:false} onChange={()=>handleCheck(i)}/>
                </div>
                <div className="text">
                    {e.todo}
                </div>
                <div className="button-action">
                  <button className="btn-edit" onClick={()=>handleEdit(i)}>Edit</button>
                  <button className="btn-delete" onClick={()=>handleDelete(i)}>Delete</button>
                </div>
              </div>
            ))
          }
      </div>
    </div>
    );
}

export default App;
