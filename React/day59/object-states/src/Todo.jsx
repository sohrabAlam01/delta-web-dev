import { v4 as uuidv4 } from 'uuid';
import { useState } from "react"
export default function Todo(){

    let [Todos, setTodos] = useState([{task: "Sample Task", id: uuidv4(), isDone: false}]);

    let [newTodo, setnewTodo] = useState("");
    
    let udpadatenewTodo = (event)=>{
        // console.log(event.target.value);
        setnewTodo(event.target.value);
    }

    //to add new task in the list
    let addNewtask = ()=>{

        setTodos( (prevTodos)=> {
                        return [...prevTodos, {task: newTodo, id: uuidv4(), isDone: false}]
        });

        setnewTodo("");

    }

    //delete todo
    let deleteTodo = (id)=>{

         setTodos((prevTodos) => prevTodos.filter((todo) => todo.id != id));  //always use filter to remove element from an array
    }

    //set all task in the uppercase
    let allUpperCase = ()=>{
         
        let newArr = Todos.map((todo)=>{
            return {...Todos, task: todo.task.toUpperCase()}
        });

        setTodos(()=> newArr);
    }
//Mark one task as done
    let markAsdone = (id) => {

        setTodos((prevTodos) =>
            prevTodos.map((todo)=>{
                if(todo.id == id){
                    return {...todo, isDone: true};
                }else {
                    return todo;
                }
            })
    )
    }

    //Mark all tasks as done

    let markAllTaskDone = ()=>{

        setTodos((prevTodos) => 
              prevTodos.map((todo)=>{
                return {...todo, isDone: true}
              }))
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
            Todos.map((todo)=>(
                 <li key = {todo.id}> <span style = {todo.isDone ? {textDecorationLine: "line-through"} : {}}>{todo.task}</span>
                 &nbsp; &nbsp;
{/* Imp notes: we have to pass id as parameter to deleteTodo function but we do not want to execute this on the time of rendering , } */}
{/* if we write like this {deleteTodo(todo.id) it will get execute at the time of rending so that's why we write it as an arrow function */}
{/*  since arrow function creates a copy of function and do not executes */} 
                 <button onClick={ ()=> deleteTodo(todo.id)}>Delete</button>  
                 <button onClick={ ()=> markAsdone(todo.id)}>Mark as done</button>
                 </li>
                  
            ))
         }
         </ul>
         <br /><br />
         <button key={"frijh4fjlkmtghitghr"} onClick={allUpperCase}>ALL UPPERCASE</button> <br /> <br /> <br />
         <button key={"frijh4fjlkmtghitghr"} onClick={markAllTaskDone}>Mark all as done</button>
        </>
    )
}