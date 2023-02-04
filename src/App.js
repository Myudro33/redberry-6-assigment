import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Education from './Pages/Education/Education'
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
        <Route path={'/education'} element={<Education/>}/>
      </Routes>
    </div>
  )
}

export default App