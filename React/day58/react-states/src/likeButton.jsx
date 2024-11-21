import { useState } from "react"


export default function LikeButton () {

   let [isLiked, setisLiked] = useState(false);
   let [clicks, setclicks] = useState(0);

   function toggleisLiked(){
         setisLiked(!isLiked);
         setclicks(clicks + 1);
   }
   

   let style = {
     color: 'red',
     fontSize: '2.5rem'
   }

    return (
        <div>
            {/* {isLiked.toString()} boolean value does not display directly so we have to change it into string to display on the screen */}
            <p>clicks = {clicks}</p>
           <p>{isLiked? <i style={style} class="fa-solid fa-heart"></i>  : <i class="fa-regular fa-heart"></i>}</p>
           <button onClick={toggleisLiked}>Like Me</button>
           
        </div>
    )
}

