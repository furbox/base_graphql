import { GraphQLSchema } from 'graphql';
//libreria para que reconozca los ficheros *.graphql
import 'graphql-import-node';
import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from './schema.graphql';
import resolvers from '../resolvers/resolversMap';
//linea para ejecutar las types y resolvers
const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs,
    resolvers
});

export default schema;