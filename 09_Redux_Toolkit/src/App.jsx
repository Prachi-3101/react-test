import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import SimpleTodo from './components/SimpleTodo'

function App() {
  

  return (
    <>
      <h1>Redux Toolkit</h1>
      <AddTodo />
      <SimpleTodo />
    </>
  )
}

export default App
