import { IUser } from '../user/user.interface';

export interface IManager {
  id?: string;
  name: string;
  phone_number: string;
  position: string;
  user: IUser;
}
