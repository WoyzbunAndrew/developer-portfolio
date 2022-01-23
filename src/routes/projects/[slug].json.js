import { client } from '$lib/graphql-client'
import { gql } from 'graphql-request'


export const get = async req => {
    const slug = req.params.slug
    try {
        const query = gql`
            query Project($slug: String!) {
                project(where: { slug: $slug }) {
                    name
                    description
                    tags
                    image {
                        url
                        fileName
                    }
                }
            }
        `
        const variables = { slug }
        const { project } = await client.request(query, variables)

        return {
            status: 200,
            body: { project },
        }
    } 
    catch (error) {
        return {
            status: 500,
            body: { error: 'There was a server error.' },
        }
    }
}