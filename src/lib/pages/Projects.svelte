<script>
    // import { browser } from "$app/environment";
    import { PUBLIC_USERNAME } from "$env/static/public";

    let main_url = "https://www.github.com/";
    let repos = [];

    async function getRepos() {
        try {
            const res = await fetch(
                `https://api.github.com/users/${PUBLIC_USERNAME}/repos`
            );
            const data = await res.json();
            repos = data;
        } catch (error) {
            console.error(error);
        }
    }
</script>

<svelte:head>
    <title>Projects and Repositories</title>
</svelte:head>

<!-- {#if browser} -->
{#await getRepos()}
    <p>Loading...</p>
{:then}
    {#each repos as repo}
        <p>
            Title:
            <a href="{main_url}{repo.full_name}" style="text-decoration: none;"
                >{repo.name}</a
            >
            {#if repo.description ?? (repo.description = "Not yet added")}
                <br />Description: {repo.description}
            {/if}
        </p>
    {/each}
{/await}
<!-- {/if} -->
