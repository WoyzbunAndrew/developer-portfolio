<script>
    import Header from '$lib/components/header.svelte'
	import '../../app.css';
</script>


<Header />

<main class="container max-w-xl mx-auto px-4">
    <slot />
</main>