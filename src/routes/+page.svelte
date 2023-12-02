<script>
    // import About from '$lib/pages/About.svelte';
    // import Work from '$lib/pages/Work.svelte';
    // import Projects from '$lib/pages/Projects.svelte';

    let todo = `TODO NEXT: <br> 1. Implement a blog page. <br> 2. Add a visitor count to the website <br>`;

    import { route } from '$lib/ROUTES';
</script>

<svelte:head>
    <title>Welcome to my Portfolio</title>
</svelte:head>

<h1>Welcome to my portfolio website</h1>

<p>Go to my <a href={route('/about')}>about page</a> to learn more about me</p>

<p id="todo">
    {@html todo.toLowerCase()}
</p>

<!-- <About />
<Work />
<Projects /> -->

<style>
    #todo {
        font-size: 3em;
        font-weight: 900;
    }
</style>
