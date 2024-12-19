import { useState } from 'react'
import { Button, Heading,Flex } from '@chakra-ui/react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Flex gap="4" direction="column">
          <Heading size="3xl">Todolist</Heading>
          <div>
            <Button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </Button>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
      </Flex>
    </>
  )
}

export default App
