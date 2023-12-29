import { json } from '@sveltejs/kit';
import type { Post } from '$lib/types';

/**
 * Returns a list of posts from the /src/posts directory
 * @returns {Promise<Post[]>} posts
 */
async function getPosts() {
    let posts: Post[] = [];

    const paths = import.meta.glob('/src/posts/*.md', { eager: true });

    // iterate over the paths and import the files
    for (const path in paths) {
        // get the file from the paths array created by the glob function above
        const file = paths[path];

        // get the slug from the path which is the filename to be used as the route
        const slug = path.split('/').at(-1)?.replace('.md', '');

        // check if the file is an object and has metadata and a slug for safety purposes
        // if yes then add it to the posts array
        if (file && typeof file === 'object' && 'metadata' in file && slug) {
            // file metadata is obtained from the frontmatter of the markdown file
            // Omit the slug from the metadata and add it back in as a property
            const metadata = file.metadata as Omit<Post, 'slug'>;

            // satisfies is a type guard that checks if the metadata object satisfies the Post type along with the slug property
            const post = { ...metadata, slug } satisfies Post;

            // only add the post to the posts array if it is published
            post.published && posts.push(post);
        }
    }

    // sort the posts by date in descending order
    posts = posts.sort(
        (first, second) =>
            new Date(second.date).getTime() - new Date(first.date).getTime()
    );

    // return posts to the api endpoint caller
    return posts;
}

// GET request handler for the /api/posts endpoint
export async function GET() {
    const posts = await getPosts();
    return json(posts);
}
