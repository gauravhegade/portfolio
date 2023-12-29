import type { Post } from '$lib/types';

export async function load({ fetch }) {
    // fetch posts from the api endpoint
    const response = await fetch('api/posts');
    const posts: Post[] = await response.json();
    return { posts };
}
