<script lang="ts">
    import { browser } from "$app/environment";
    let main_url = "https://www.github.com/";
    export let data;
</script>

<svelte:head>
    <title>Projects and Repositories</title>
</svelte:head>

{#if browser}
    <p>
        Number of repositories, excluding private repositories: {data.repos
            .length}
    </p>
    {#each data.repos as repo}
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
{/if}
