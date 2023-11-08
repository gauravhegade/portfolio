<script>
    import { browser } from "$app/environment";

    /**
     * @type {any[]}
     */
    let repos = [];
    let repo_url = "https://www.github.com/";

    async function getRepos() {
        try {
            const response = await fetch(
                `https://api.github.com/users/gauravhegade/repos`
            );
            const data = await response.json();
            // console.log(data); // log data if needed later on
            repos = data;
        } catch (error) {
            console.error(error);
        }
    }
</script>

<svelte:head>
    <title>Projects and Repositories</title>
</svelte:head>

{#if browser}
    {#await getRepos()}
        <p>Loading Data Please Wait...</p>
    {:then}
        <p>
            Number of repositories, excluding private repositories: {repos.length}
        </p>

        {#each repos as repo}
            <p>
                Title:
                <a
                    href="{repo_url}{repo.full_name}"
                    style="text-decoration: none;">{repo.name}</a
                >
                {#if repo.description ?? (repo.description = "Not yet added")}
                    <br />Description: {repo.description}
                {/if}
            </p>
        {/each}
    {:catch error}
        <p>{error.message}</p>
    {/await}
{/if}
