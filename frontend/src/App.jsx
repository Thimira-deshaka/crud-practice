import React from 'react'
import Home from './component/home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Create from './component/Create'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/create' element={<Create />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App