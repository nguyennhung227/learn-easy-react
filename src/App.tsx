import './App.css'
import { MainLayout } from './components/Layout'
import { Widget } from './components/common'
import { FilterableList } from './features/labs/FilterableList'
import { FixBrokenChat } from './features/labs/FixBrokenChat'
import { FixDisappearingInput } from './features/labs/FixDisappearingInput'
import { LiftingStateUp } from './features/labs/LiftingStateUp'
import { ResetDetailForm } from './features/labs/ResetDetailForm'
import { StudentCard } from './features/labs/StudentCard'
import { SwapTwoForm } from './features/labs/SwapTwoForm'
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
        <br />
        <h2 className="font-bold text-xl m-5">Synced inputs demo</h2>
        <LiftingStateUp />
        <br />
        <hr />
        <h2 className="font-bold text-xl p-5">Filtering a list demo</h2>
        <FilterableList />
        <br />
        <hr />
        <h2 className="font-bold text-xl my-5">Fix disappearing input text</h2>
        <FixDisappearingInput />
        <br />
        <hr />
        <h2 className="font-bold text-xl my-5">Swap two form fields</h2>
        <SwapTwoForm />
        <br />
        <hr />
        <h2 className="font-bold text-xl my-5"> Reset a detail form</h2>
        <ResetDetailForm />
        <br />
        <hr />
        <h2 className="font-bold text-xl my-5"> Fix a broken chat input</h2>
        <FixBrokenChat />
      </MainLayout>
    </div>
  )
}

export default App
