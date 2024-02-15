import { Team } from './team';

export interface Project {
  id?: number;
  name: string;
  description: string;
  active: boolean;
  team: Team;
}
