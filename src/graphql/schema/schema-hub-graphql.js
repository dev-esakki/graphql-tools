import fs from 'fs';
import path from 'path';
import { makeExecutableSchema } from 'graphql-tools';
import { merge } from 'lodash';
import books from './book/book-schema'
console.log(books.resolvers)

const Query = `
  type Query {
    status: String
  }
`;

const Mutation = `
  type Mutation {
    _empty: String
  }
`;

let resolvers = {
  Query: {
    status: () => 'ok'
  }
};

const typeDefs = [Query, Mutation];

resolvers = merge(resolvers, books.resolvers);
typeDefs.push(books.types);

// Read the current directory and load types and resolvers automatically
/* fs.readdirSync(__dirname)
  .filter(dir => (dir.indexOf('.') < 0))
  .forEach((dir) => {
    console.log(dir)
    const tmp = require(path.join(__dirname, dir)).default; // eslint-disable-line
    resolvers = merge(resolvers, tmp.resolvers);
    typeDefs.push(tmp.types);
  }); */

  /* console.log("resolvers", resolvers)
  console.log("typeDefs", typeDefs) */

export default makeExecutableSchema({
  typeDefs,
  resolvers
});
