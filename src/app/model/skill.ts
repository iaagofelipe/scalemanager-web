import { Employee } from './employee';
export interface Skill {
  id: number
  description: string
  code: number
  employees: Employee[]
  skillCode: string
}
