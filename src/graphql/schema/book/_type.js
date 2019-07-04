const Book = `
  type Book {
    title: String!
    author: String!
  }  
`;

const Author = `
  type Author {
    name: String!
    age: String! 
  }
`

export const types = () => [Book, Author];

export const typeResolvers = {

};
