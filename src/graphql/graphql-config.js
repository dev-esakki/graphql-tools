import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import config from '../config/config';
import schema from './schema/schema-hub-graphql';

export default (app) => {
  if (config.env === 'development') {
    app.use('/api/graphiql', graphiqlExpress({ endpointURL: '/api' }));
  }

  app.use(
    '/api',
    bodyParser.json(),
    graphqlExpress(() => ({
      schema,
      debug: config.env === 'development'
    }))
  );
};
