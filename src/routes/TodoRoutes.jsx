import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from '../pages/Header'
import { AllTask } from '../pages/AllTask'
import { ActiveTask } from '../pages/ActiveTask'
import { CompleteTask } from '../pages/CompleteTask'

export function TodoRoutes() {
  return (
    <div className="container mx-auto w-[608px]">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<AllTask />} />
          <Route path="/all" element={<AllTask />} />
          <Route path="/active" element={<ActiveTask />} />
          <Route path="/complete" element={<CompleteTask />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
