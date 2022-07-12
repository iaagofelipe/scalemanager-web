import { EmployeeScale } from './employeeScale';
import { TypeScale } from './typeScale';
export interface Scale {
  id: number
  description: string
  scaleCode: string
  employeeScale: EmployeeScale[]
  typeScale: TypeScale
}
