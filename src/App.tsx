import { useState } from 'react'
import './App.css'
import { StudentCard } from './features/labs/StudentCard'
import { Student } from './models'

function App() {
  const customer: Student = {
    name: 'Nhung Nguyen',
    age: 38,
    isHero: true,
    hobbyList: ['shopping', 'travelling'],
  }

  return (
    <div>
      <StudentCard student={customer}></StudentCard>
    </div>
  )
}

export default App
