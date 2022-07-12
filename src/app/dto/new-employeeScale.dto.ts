import { employeeDto } from "./new-employee.dto";
import { HoursBankDto } from "./new-hoursBank.dto";

export interface EmployeeScaleDto {
  hoursBank: HoursBankDto;
  employee: employeeDto
}
