<script context="module">
    export const load = async ({ fetch, params }) => {
        const { slug } = params
        const res = await fetch(`/projects/${slug}.json`)
        if (res.ok) {
            const { project } = await res.json()
            return {
                props: { project },
            }
        }
    }
</script>

  
<script>
    export let project
    
    const {
        name,
        description,
        tags,
        image,
    } = project
</script>


<h2 class="text-xl mt-5 mb-5 font-bold">{project.name}</h2>

  
  


<article class="prose mb-10">
    {@html project.description}
</article>


{#each project.image as image}
    {#if image.fileName != 'title.jpg'}
        <div class="sm:-mx-5 md:-mx-10 lg:-mx-20 xl:-mx-38 mb-5">
            <img src={image.url}
                 alt={`Cover image for ${project.name}`}
                 class="rounded-xl object-cover object-center"
            />
        </div>
    {/if}
{/each}
  