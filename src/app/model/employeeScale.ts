import { Employee } from './employee';
import { HoursBank } from './hoursBank';
import { Scale } from './scale';
export interface EmployeeScale {
  id: number
  hoursBank: HoursBank
  scale: Scale
  employee: Employee
  employeeScaleCode: string
}
