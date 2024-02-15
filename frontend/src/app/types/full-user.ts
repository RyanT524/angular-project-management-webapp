import { Company } from './company';
import { Team } from './team';

export interface FullUser {
  id?: number;
  profile: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  admin: boolean;
  active: boolean;
  status: string;
  companies: Company[];
  teams: Team[];
}

export function defaultFullUser(): FullUser {
  return {
    id: -1,
    profile: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    },
    admin: false,
    active: false,
    status: '',
    companies: [],
    teams: [],
  }
}