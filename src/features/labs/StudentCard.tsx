import { Student } from '@/models'

export interface StudentCardProps {
  student: Student
  onClick?: (student: Student) => void
}

export function StudentCard({ student, onClick }: StudentCardProps) {
  return (
    <div>
      <p>Student Name: {student.name}</p>
      <p>Student Age: {student.age}</p>
      <p>Student is Hero: {student.isHero ? 'hero' : 'no-hero'}</p>
      <p>Student Hobby List: </p>
      <ul>
        {student.hobbyList.map((hobby, idx) => (
          <li key={idx}>{hobby}</li>
        ))}
      </ul>
      <br />
      <button onClick={() => onClick?.(student)}>Click here</button>
    </div>
  )
}
