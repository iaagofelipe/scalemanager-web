import { SkillDto } from '../dto/new-skill.dto';
import { EmployeeLevelDto } from '../dto/new-employeeLevel.dto';
import { User } from './user';

export interface Employee {
  id: number
  name: string
  email: string
  phone: string
  skills: SkillDto[]
  level: EmployeeLevelDto
  user: User;
  employeeCode: string
}
