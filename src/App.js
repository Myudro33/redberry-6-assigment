import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Experience from './Pages/Experience/Experience'
import Home from './Pages/Home/Home'
import Personal from './Pages/Personal/Personal'

const App = () => {
  return (
    <div>
      <Routes >
        <Route path={'/'} element={<Home/>} />
        <Route path={'/personal'} element={<Personal/>} />
        <Route path={'/experience'} element={<Experience/>}/>
      </Routes>
    </div>
  )
}

export default App