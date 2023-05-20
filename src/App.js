import React from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import Navbar from './components/Navbar'

const App = () => {

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <TodoInput />
            <TodoList />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
