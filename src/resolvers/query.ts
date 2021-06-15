import { IResolvers } from 'graphql-tools';
//definimos los resolvers
const query: IResolvers = {
    Query:{
        hola(): String{
            return 'Hola Mundo!';
        },
        holaConNombre(__:void, {nombre}): string {
            return 'Hola mundo ' + nombre;
        },
        holaAlCursoGraphQL(): string{
            return 'Hola mundo desde GraphQL';
        }
    }
}

export default query;