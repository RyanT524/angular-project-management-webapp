export interface BasicUser {
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
}

export function defaultBasicUser(): BasicUser {
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
    status: ''
  }
}