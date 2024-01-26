import './App.css'
import { MainLayout } from './components/Layout'
import { Widget } from './components/common'
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
    alert('Welcome ' + student.name)
  }

  return (
    <div className="flex w-screen flex-col max-w-full">
      <MainLayout>
        <StudentCard student={customer} onClick={handleStudentClick}></StudentCard>
        <div className="flex flex-wrap">
          <div className="w-3/5 border h-20">
            <Widget title="Widget 1">
              <p>Widget 1</p>
            </Widget>
          </div>
          <div className="w-2/5 border">
            <Widget title="Widget 2">
              <p>Widget 2</p>
            </Widget>
          </div>
          <div className="w-2/4 border h-20">
            <Widget title="Widget 3">
              <p>Widget 3</p>
            </Widget>
          </div>
          <div className="w-2/4 border">
            <Widget title="Widget 4">
              <p>Widget 4</p>
            </Widget>
          </div>
        </div>
      </MainLayout>
    </div>
  )
}

export default App
