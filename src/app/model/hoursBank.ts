import { Employee } from "./employee";
import { EventHour } from "./eventHour";

export interface HoursBank {
  id: number;
  amountHours: number;
  employee: Employee;
  eventHour: EventHour;
}
