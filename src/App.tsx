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

  function handleStudentClick(student: Student) {
    console.log('student click:', student.name)
  }

  return (
    <div>
      <StudentCard student={customer} onClick={handleStudentClick}></StudentCard>
    </div>
  )
}

export default App
