<script context="module">
    import { gql } from 'graphql-request'
    import { client } from '$lib/graphql-client'

    export const load = async () => {
        const query = gql`
            query GetProjects {
                projects {
                    name
                    description
                    slug
                    tags
                    image {
                        url
                    }
                }
            }
            `

        const { projects } = await client.request(query)

        return {
            props: {
                projects,
            },
        }
    }
</script>


<script>
    export let projects
</script>




<h2 class="text-xl mt-5 mb-5 font-bold">Portfolio</h2>



{#each projects as { name, description, tags, slug, image }}
    <div class="card shadow-2xl mb-5">
        <figure>
            <img src={image[0].url} class="object-cover object-top max-h-40">
        </figure> 
        <div class="card-body">
            <h2 class="card-title-2 font-semibold">{name}
            </h2> 
            <div class="flex mt-2 space-x-1">
                {#each tags as tag}
                    <span class="badge badge-primary">{tag}</span>
                {/each}
            </div>
            <div class="card-actions">
                <a href={`/projects/${slug}`} class="btn btn-outline btn-primary">View</a>
            </div>
        </div>
    </div> 
{/each}
