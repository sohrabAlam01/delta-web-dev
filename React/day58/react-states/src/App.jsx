import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LikeButton from './likeButton.jsx'
import Counter from './counter'
function App() {
  // const [count, setCount] = useState(0)
  return (
    <>
       <p>Like button component</p>
       <Counter/>
       <LikeButton></LikeButton>
    </>
  )
}

export default App
