
import { EmployeeLevelDto } from "./new-employeeLevel.dto"
import { SkillDto } from "./new-skill.dto"

export interface employeeDto {
  name: string
  email: string
  phone: string
  skills: SkillDto[]
  level: EmployeeLevelDto
}
