import { GraphQLClient } from 'graphql-request'
//const GRAPHQL_ENDPOINT = process.env.VITE_GRAPHQL_API
//const GRAPHQL_ENDPOINT = import.meta.env.VITE_GRAPHQL_API
const GRAPHQL_ENDPOINT = import.meta.env.VITE_GRAPHQL_API

export const client = new GraphQLClient(GRAPHQL_ENDPOINT)