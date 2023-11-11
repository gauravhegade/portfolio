import { PUBLIC_USERNAME } from "$env/static/public";

// using load function to fetch data from github api and return it to the page
// svelte waits for the promise to resolve before rendering the page
export const load = async ({ fetch }) => {
    const res = await fetch(
        `https://api.github.com/users/${PUBLIC_USERNAME}/repos`
    );
    const repos = await res.json();
    return { repos };
};
