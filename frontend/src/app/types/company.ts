import { BasicUser } from './basic-user';
import { Team } from './team';

export interface Company {
  id?: number;
  name: string;
  description: string;
  teams: Team[];
  employees: BasicUser[];
}
