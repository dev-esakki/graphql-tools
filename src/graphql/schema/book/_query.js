const Query = `
  extend type Query {
    books: [Book]
    Author: [Author]
  }
`;

export const queryTypes = () => [Query];

export const queryResolvers = {
  Query: {
    books: () => ([
      {
        title: "Harry Potter and the Sorcerer's stone",
        author: 'J.K. Rowling',
      },
      {
        title: 'Jurassic Park',
        author: 'Michael Crichton',
      },
    ]),
    Author: () => ([
      {
        name: "author 1",
        age: "21"
      },
      {
        name: "author 2",
        age: "26"
      }
    ])
  }
};
