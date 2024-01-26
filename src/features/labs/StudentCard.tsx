import { Student } from '@/models'
import * as React from 'react'

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
      {student.hobbyList}
      <br />
      <button onClick={() => onClick?.(student)}>Click here</button>
    </div>
  )
}
