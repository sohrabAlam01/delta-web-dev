function submitHandler(event){
     event.preventDefault();
    console.log("form was submitted")
}

export default function Form(){

    return  (
            <form onSubmit={submitHandler}>
               <input type="text" name="" id="" placeholder="Type something" />
               <button>Submit</button>
            </form>
    )
}