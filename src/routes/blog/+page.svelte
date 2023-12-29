<script lang="ts">
    import { formatDate } from '$lib/utils';
    export let data;
</script>

<!-- Posts -->

<h1>Welcome to my blog page</h1>
{#each data.posts as post}
    <a href='/blog/{post.slug}' class="title">{post.title}</a>
    <p class="date">{formatDate(post.date)}</p>
    <p class="description">{post.description}</p>
{/each}
