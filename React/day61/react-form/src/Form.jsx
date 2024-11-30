import { useState } from "react"

export default function Form(){

    let [fullName, setFullName] = useState("");

    function handleNameChange(event){
             setFullName(event.target.value);
    }

        return (
            <form action="">
                <label htmlFor="username">Enter a valid username</label>
                <input placeholder="Enter your name" type="text" id="username" value={fullName} onChange={handleNameChange}/>
                <button>Submit</button>
            </form>
        )

}