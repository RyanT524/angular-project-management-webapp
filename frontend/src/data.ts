import { FullUser } from './app/types/full-user';

export const LoganRoy: FullUser = {
  id: 23,
  profile: {
    firstName: 'Logan',
    lastName: 'Roy',
    email: 'lroy@email.com',
    phone: '(555) 555-5555',
  },
  admin: true,
  active: true,
  status: 'PENDING',
  companies: [
    {
      // id: 1,
      id: 6,
      name: 'waystar|ROYCO',
      description:
        'waystar|ROYCO, the future of media, entertainment, and theme parks.',
      teams: [
        {
          id: 12,
          name: 'Team 2',
          description: 'Tom & Shiv',
          teammates: [
            {
              id: 19,
              profile: {
                firstName: 'Tom',
                lastName: 'Wambsgans',
                email: 'twambsgans@email.com',
                phone: '(111) 111-1111',
              },
              admin: false,
              active: true,
              status: 'PENDING',
            },
            {
              id: 22,
              profile: {
                firstName: 'Siobhan',
                lastName: 'Roy',
                email: 'sroy@email.com',
                phone: '(444) 444-4444',
              },
              admin: false,
              active: true,
              status: 'PENDING',
            },
          ],
        },
        {
          id: 16,
          name: 'Team 6',
          description: 'Kendall, Roman, Shiv, & Connor',
          teammates: [
            {
              id: 20,
              profile: {
                firstName: 'Kendall',
                lastName: 'Roy',
                email: 'kroy@email.com',
                phone: '(222) 222-2222',
              },
              admin: false,
              active: false,
              status: 'PENDING',
            },
            {
              id: 21,
              profile: {
                firstName: 'Roman',
                lastName: 'Roy',
                email: 'rroy@email.com',
                phone: '(333) 333-3333',
              },
              admin: false,
              active: true,
              status: 'PENDING',
            },
            {
              id: 22,
              profile: {
                firstName: 'Siobhan',
                lastName: 'Roy',
                email: 'sroy@email.com',
                phone: '(444) 444-4444',
              },
              admin: false,
              active: true,
              status: 'PENDING',
            },
            {
              id: 24,
              profile: {
                firstName: 'Connor',
                lastName: 'Roy',
                email: 'croy@email.com',
                phone: '(666) 666-6666',
              },
              admin: false,
              active: false,
              status: 'PENDING',
            },
          ],
        },
        {
          id: 14,
          name: 'Team 4',
          description: 'Greg & Kendall',
          teammates: [
            {
              id: 20,
              profile: {
                firstName: 'Kendall',
                lastName: 'Roy',
                email: 'kroy@email.com',
                phone: '(222) 222-2222',
              },
              admin: false,
              active: false,
              status: 'PENDING',
            },
            {
              id: 18,
              profile: {
                firstName: 'Greg',
                lastName: 'Hirsch',
                email: 'ghirsch@email.com',
                phone: '(000) 000-0000',
              },
              admin: false,
              active: true,
              status: 'PENDING',
            },
          ],
        },
        {
          id: 13,
          name: 'Team 3',
          description: 'Roman & Gerri',
          teammates: [
            {
              id: 21,
              profile: {
                firstName: 'Roman',
                lastName: 'Roy',
                email: 'rroy@email.com',
                phone: '(333) 333-3333',
              },
              admin: false,
              active: true,
              status: 'PENDING',
            },
            {
              id: 26,
              profile: {
                firstName: 'Gerri',
                lastName: 'Kellman',
                email: 'gkellman@email.com',
                phone: '(888) 888-8888',
              },
              admin: true,
              active: true,
              status: 'JOINED',
            },
          ],
        },
        {
          id: 15,
          name: 'Team 5',
          description: 'Logan & Marcia',
          teammates: [
            {
              id: 25,
              profile: {
                firstName: 'Marcia',
                lastName: 'Roy',
                email: 'mroy@email.com',
                phone: '(777) 777-7777',
              },
              admin: false,
              active: false,
              status: 'PENDING',
            },
            {
              id: 23,
              profile: {
                firstName: 'Logan',
                lastName: 'Roy',
                email: 'lroy@email.com',
                phone: '(555) 555-5555',
              },
              admin: true,
              active: true,
              status: 'PENDING',
            },
          ],
        },
        {
          id: 11,
          name: 'Team 1',
          description: 'Greg & Tom',
          teammates: [
            {
              id: 19,
              profile: {
                firstName: 'Tom',
                lastName: 'Wambsgans',
                email: 'twambsgans@email.com',
                phone: '(111) 111-1111',
              },
              admin: false,
              active: true,
              status: 'PENDING',
            },
            {
              id: 18,
              profile: {
                firstName: 'Greg',
                lastName: 'Hirsch',
                email: 'ghirsch@email.com',
                phone: '(000) 000-0000',
              },
              admin: false,
              active: true,
              status: 'PENDING',
            },
          ],
        },
      ],
      employees: [
        {
          id: 20,
          profile: {
            firstName: 'Kendall',
            lastName: 'Roy',
            email: 'kroy@email.com',
            phone: '(222) 222-2222',
          },
          admin: false,
          active: false,
          status: 'PENDING',
        },
        {
          id: 19,
          profile: {
            firstName: 'Tom',
            lastName: 'Wambsgans',
            email: 'twambsgans@email.com',
            phone: '(111) 111-1111',
          },
          admin: false,
          active: true,
          status: 'PENDING',
        },
        {
          id: 25,
          profile: {
            firstName: 'Marcia',
            lastName: 'Roy',
            email: 'mroy@email.com',
            phone: '(777) 777-7777',
          },
          admin: false,
          active: false,
          status: 'PENDING',
        },
        {
          id: 21,
          profile: {
            firstName: 'Roman',
            lastName: 'Roy',
            email: 'rroy@email.com',
            phone: '(333) 333-3333',
          },
          admin: false,
          active: true,
          status: 'PENDING',
        },
        {
          id: 22,
          profile: {
            firstName: 'Siobhan',
            lastName: 'Roy',
            email: 'sroy@email.com',
            phone: '(444) 444-4444',
          },
          admin: false,
          active: true,
          status: 'PENDING',
        },
        {
          id: 23,
          profile: {
            firstName: 'Logan',
            lastName: 'Roy',
            email: 'lroy@email.com',
            phone: '(555) 555-5555',
          },
          admin: true,
          active: true,
          status: 'PENDING',
        },
        {
          id: 26,
          profile: {
            firstName: 'Gerri',
            lastName: 'Kellman',
            email: 'gkellman@email.com',
            phone: '(888) 888-8888',
          },
          admin: true,
          active: true,
          status: 'JOINED',
        },
        {
          id: 18,
          profile: {
            firstName: 'Greg',
            lastName: 'Hirsch',
            email: 'ghirsch@email.com',
            phone: '(000) 000-0000',
          },
          admin: false,
          active: true,
          status: 'PENDING',
        },
        {
          id: 24,
          profile: {
            firstName: 'Connor',
            lastName: 'Roy',
            email: 'croy@email.com',
            phone: '(666) 666-6666',
          },
          admin: false,
          active: false,
          status: 'PENDING',
        },
      ],
    },
    {
      // id: 2,
      id: 7,
      name: 'Vought',
      description: `Today's heroes.  Tomorrow's future.`,
      teams: [],
      employees: [],
    },
  ],
  teams: [
    {
      id: 15,
      name: 'Team 5',
      description: 'Logan & Marcia',
      teammates: [
        {
          id: 25,
          profile: {
            firstName: 'Marcia',
            lastName: 'Roy',
            email: 'mroy@email.com',
            phone: '(777) 777-7777',
          },
          admin: false,
          active: false,
          status: 'PENDING',
        },
        {
          id: 23,
          profile: {
            firstName: 'Logan',
            lastName: 'Roy',
            email: 'lroy@email.com',
            phone: '(555) 555-5555',
          },
          admin: true,
          active: true,
          status: 'PENDING',
        },
      ],
    },
  ],
};

export const projectList = [
  {
    id: 10,
    name: 'Shuttle Launch',
    description: 'Shuttle launch in Japan to be led by COO, Roman Roy.',
    active: true,
    team: {
      id: 13,
      name: 'Team 3',
      description: 'Roman & Gerri',
      teammates: [
        {
          id: 21,
          profile: {
            firstName: 'Roman',
            lastName: 'Roy',
            email: 'rroy@email.com',
            phone: '(333) 333-3333',
          },
          admin: false,
          active: true,
          status: 'PENDING',
        },
        {
          id: 26,
          profile: {
            firstName: 'Gerri',
            lastName: 'Kellman',
            email: 'gkellman@email.com',
            phone: '(888) 888-8888',
          },
          admin: true,
          active: true,
          status: 'JOINED',
        },
      ],
    },
  },
  {
    id: 10,
    name: 'Shuttle Launch',
    description: 'Shuttle launch in Japan to be led by COO, Roman Roy.',
    active: true,
    team: {
      id: 13,
      name: 'Team 3',
      description: 'Roman & Gerri',
      teammates: [
        {
          id: 21,
          profile: {
            firstName: 'Roman',
            lastName: 'Roy',
            email: 'rroy@email.com',
            phone: '(333) 333-3333',
          },
          admin: false,
          active: true,
          status: 'PENDING',
        },
        {
          id: 26,
          profile: {
            firstName: 'Gerri',
            lastName: 'Kellman',
            email: 'gkellman@email.com',
            phone: '(888) 888-8888',
          },
          admin: true,
          active: true,
          status: 'JOINED',
        },
      ],
    },
  },
  {
    id: 10,
    name: 'Shuttle Launch',
    description: 'Shuttle launch in Japan to be led by COO, Roman Roy.',
    active: true,
    team: {
      id: 13,
      name: 'Team 3',
      description: 'Roman & Gerri',
      teammates: [
        {
          id: 21,
          profile: {
            firstName: 'Roman',
            lastName: 'Roy',
            email: 'rroy@email.com',
            phone: '(333) 333-3333',
          },
          admin: false,
          active: true,
          status: 'PENDING',
        },
        {
          id: 26,
          profile: {
            firstName: 'Gerri',
            lastName: 'Kellman',
            email: 'gkellman@email.com',
            phone: '(888) 888-8888',
          },
          admin: true,
          active: true,
          status: 'JOINED',
        },
      ],
    },
  },
];
