import { useState } from "react"

export default function Form(){

    let [formData, setFormData] = useState(
        {
            firstName: "",
            middleName: "",
            lastName: ""
        }
    );

    let handleNameChange = (event) => {
            let fieldName = event.target.name;
            let fieldVal = event.target.value;

            setFormData((currValue)=>{
                currValue[fieldName] = fieldVal;
                return {...currValue}
                // return {...currValue, [fieldName] : fieldVal} : another way to do that
            })
    }

    let handleSubmit = (event)=>{
                    event.preventDefault();
                    setFormData({
                        firstName: "",
                        middleName: "",
                        lastName: ""
                    })
    }


        return (
            <form onSubmit={handleSubmit}>
                
                <label htmlFor="firstName">Enter your first name</label>
                <input name="firstName" placeholder="Enter first name" type="text" id="firstName" value={formData.firstName} onChange={handleNameChange}/>
                <br /><br />
                <label htmlFor="middleName">Enter your middleName</label>
                <input name="middleName" placeholder="Enter your middle name" type="text" id="middleName" value={formData.middleName} onChange={handleNameChange}/>
                <br /><br />
                <label htmlFor="last name">Enter your last name</label>
                <input name="lastName" placeholder="Enter your name" type="text" id="last name" value={formData.lastName} onChange={handleNameChange}/>
               <br/><br/>

                <button>Submit</button>
            </form>
        )

}