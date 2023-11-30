import fs from 'fs/promises'; // Using promises version of fs
import { glob } from 'glob';
import fm from 'front-matter';
import rehypeStringify from 'rehype-stringify';
import remarkFrontmatter from 'remark-frontmatter';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

/**
 * Imports Markdown files from a specified path, processes them, and returns an array of promises.
 *
 * @param {string} markdownPath - The path to the folder containing Markdown files.
 * @returns An array of promises, each resolving to an object with attributes and HTML content.
 */
export async function importMarkdowns(markdownPath) {
    try {
        // Get an array of file names matching the pattern in the specified path
        // using the asynchrnous version of glob
        let fileNames = await glob(`${markdownPath}*.md`);

        // Use Promise.all to wait for all promises returned by convertMarkdown to resolve
        return Promise.all(
            fileNames.map(async (path) => await convertMarkdown(path))
        );
    } catch (err) {
        console.error(`Could not import markdowns: ${err}`);
    }
}

/**
 * Reads a Markdown file, extracts front matter and converts the Markdown content to HTML.
 *
 * @param {string} path - The path to the Markdown file.
 * @returns {Promise<{ attributes: Object, html: string }>} - A promise resolving to an object containing attributes and HTML content.
 */
export async function convertMarkdown(path) {
    // Read the file using fs.promises
    let file = await fs.readFile(path, 'utf8');

    // Extract front matter and body with the front-matter package
    let { attributes, body } = fm(file);

    // Use unified to process Markdown to HTML
    let result = await unified()
        .use(remarkParse)
        .use(remarkFrontmatter)
        .use(remarkRehype)
        .use(rehypeStringify)
        .process(body);

    let res = String(result);

    // Return an object with attributes and HTML content
    return { attributes, html: res };
}

// Debug code (commented out to avoid running in production)
// let lmao = await importMarkdowns('src/routes/blog/posts/');
// lmao.forEach((element) => {
//     console.log(element.attributes);
//     console.log(element.html);
// });
