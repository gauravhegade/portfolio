<script>
    let todo = `TODO NEXT: <br> 1. Implement a blog page. <br> 2. Add a visitor count to the website <br> 3. ADD A FEATURE WHERE PEOPLE CAN ADD SOME TOKEN OF APPRECIATION(may change idk what this is lmao) WHEN THEY VISIT THE WEBSITE AS A MARK OF BEING VISITED`;
</script>

<svelte:head>
    <title>Welcome to my Portfolio</title>
</svelte:head>

<h1>Welcome to my portfolio website</h1>

<p>Go to my <a href="/about">about page</a> to learn more about me</p>

<p id="todo">
    {@html todo.toLowerCase()}
</p>

<style>
    #todo {
        font-size: 3em;
        font-weight: 900;
    }
</style>
