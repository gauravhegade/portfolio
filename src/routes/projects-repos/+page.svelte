<script>
  import { browser } from "$app/environment";

  /**
   * @type {any[]}
   */
  let repos = [];

  async function getRepos() {
    try {
      const response = await fetch(
        `https://api.github.com/users/gauravhegade/repos`
      );
      const data = await response.json();
      // console.log(data);
      repos = data;
    } catch (error) {
      console.error(error);
    }
  }
</script>

<p>Projects go here</p>
{#if browser}
  {#await getRepos()}
    <p>Loading Data Please Wait...</p>
  {:then}
    {#each repos as repo}
      <p>{repo.name}</p>
    {/each}
  {:catch error}
    <p>{error.message}</p>
  {/await}
{/if}
