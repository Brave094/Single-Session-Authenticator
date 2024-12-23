import { Button, Input } from '../components'
import './App.css'


export const Todo = () => {
  return (
    <>
      <Input />
      <Button label="Agregar"></Button>
    </>
  ) 
}



function App() {
  return (
    <>
      <Todo />
    </>
  )
}

export default App
