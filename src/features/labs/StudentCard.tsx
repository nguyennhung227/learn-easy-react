import { Student } from '@/models'
import * as React from 'react'

export interface StudentCardProps {
  student: Student
}

export function StudentCard({ student }: StudentCardProps) {
  return (
    <div>
      <p>Student Name: {student.name}</p>
      <p>Student Age: {student.age}</p>
      <p>Student is Hero: {student.isHero ? 'hero' : 'no-hero'}</p>
      <p>Student Hobby List: </p>
      {student.hobbyList}
    </div>
  )
}
