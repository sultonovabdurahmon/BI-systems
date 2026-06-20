import { Button } from "@chakra-ui/react"
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Button onClick={() => setCount(count => count+1)}> Click me {count}</Button>
    </>
  )
}

export default App
