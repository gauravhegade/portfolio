<!-- static navbar that gets displayed on all pages across the website -->

<script>
    import { route } from '$lib/ROUTES';
</script>

<nav>
    <a href={route('/')}>Home</a>
    <a href={route('/about')}>About</a>
    <a href={route('/projects')}>Projects</a>
    <a href={route('/experience')}>Experience</a>
    <a href={route('/blog')}>Blog</a>
</nav>

<slot />
