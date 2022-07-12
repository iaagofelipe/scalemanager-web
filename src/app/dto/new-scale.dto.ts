import { EmployeeScaleDto } from './new-employeeScale.dto';
import { TypeScaleDto } from './new-typeScale.dto';
export interface ScaleDto {
  description: string
  date: Date
  emplyeeScale: EmployeeScaleDto[]
  typeScale: TypeScaleDto
}
