import { useState } from "react";

export default function Comments(){

    let [formData, setFormData] = useState({
        username: "",
        remarks: "",
        rating: 3
    });


    let handleInputChange = (event)=>{
          
         setFormData((currData)=>{
              return {...currData, [event.target.name]: event.target.value}
         })   
    };


    let handleSubmit = (event)=>{
        event.preventDefault();
        setFormData({
            username: "",
            remarks: "",
            rating: 3
        })
    };


    return (
        <div>

            <h2>Leave a Comment</h2> 
            <form action="/" onSubmit={handleSubmit}>
                 <input type="text" name="username" id="username" placeholder="Enter your name" onChange={handleInputChange} value={formData.username}/>
                 <br /><br />
                 <textarea cols={35} rows={8} name="remarks" id="remarks" onChange={handleInputChange} value={formData.remarks} placeholder="Leave a remarks here"></textarea> 
                 <br /><br />
                 <input type="number" name="rating" id="rating" min={1} max={5} onChange={handleInputChange} value={formData.rating}/> 
                 <br /><br />
                 <button>Submit</button>   
            </form>

        </div>
    )
  
}