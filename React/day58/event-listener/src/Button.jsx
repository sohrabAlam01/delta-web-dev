function handleclick() {
    console.log("Hello sir")
}

function handleMouseHover() {
    console.log("Hello sir")
}

function dblClick() {
    console.log("Hello sir")
}
export default function Button() {

    return (
        <div>
            <button onClick={handleclick}>Click me sir!</button>
            <p onMouseEnter={handleMouseHover}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quidem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam natus, commodi aspernatur dolore minus rem eum quos iste cupiditate et.</p>
            <button onDoubleClick={dblClick}>Double click me sir</button>
        </div>
    )
}