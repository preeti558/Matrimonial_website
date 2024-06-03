import { RegistrationInfo } from "./registrationInfo";
export interface UserInfo {
  userId?: number;
  id?: number;
  registration: RegistrationInfo;
  firstName: string;
  lastName: string;
  age: number;
  dateOfBirth: Date;
  gender: string;
}