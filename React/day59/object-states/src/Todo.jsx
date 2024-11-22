import { useState } from "react"
export default function Todo(){

    let [Todos, setTodos] = useState(["Your Tasks"]);

    let [newTodo, setnewTodo] = useState("");
    
    let udpadatenewTodo = (event)=>{
        console.log(event.target.value);
        setnewTodo(event.target.value);
    }

    let addNewtask = ()=>{

        setTodos([...Todos, newTodo]);
        setnewTodo("");

    }

    return (
        <>
         
         <h1>Todo</h1>

         <input  type="text" placeholder="Add a Task" value={newTodo} onChange={udpadatenewTodo} />
         <br /> <br />
         <button onClick={addNewtask}>Add Task</button>
         <br/><br/>
         
         <h3>Your sample Task</h3>
         <hr/>
         <ul>
         {
            Todos.map((todo)=>{
                return <li>{todo}</li>
            })
         }
         </ul>
        </>
    )
}