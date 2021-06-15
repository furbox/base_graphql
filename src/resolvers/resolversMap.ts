import { IResolvers } from 'graphql-tools';
import query from './query';
//definimos los resolvers
const resolvers: IResolvers = {
    ...query
}

export default resolvers;