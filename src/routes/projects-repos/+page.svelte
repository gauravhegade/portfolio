<script>
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
      repos = data;
      console.log(repos);
    } catch (error) {
      console.error(error);
    }
  }
</script>

<p>Projects go here</p>
<button on:click={getRepos}>Show repositories</button>
<div>
  {#each repos as repo}
    <p>{repo.name}</p>
  {/each}
</div>
