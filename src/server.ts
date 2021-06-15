//importamos las librerias express compression y cors
import express, { Application } from "express";
import compression from "compression";
import cors from "cors";
import schema from "./schema";
import { ApolloServer } from "apollo-server-express";
import { createServer } from "http";

//creamos una instancia de express
const app: Application = express();

//usamos el middleware cors
app.use(cors());

//usamos el middleware compression
app.use(compression());

//configurar apollo Server
const server = new ApolloServer({
  schema,
  introspection: true,
});

server.applyMiddleware({ app });

//creamos una constancia para el puerto
const PORT = 9000;

//crear server
const httpServer = createServer(app);

//usamos listen para escuchar todo lo que pase por el puerto configurado anteriormente
httpServer.listen({ port: PORT }, () =>
  console.log("Escuchamos en el puerto " + PORT)
);
