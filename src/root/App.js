import React from 'react'
import { Routes, Route } from "react-router-dom";
import Dashboard from './Dashboar';
const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Dashboard/>} />
    </Routes>
    </>
  )
}

export default App