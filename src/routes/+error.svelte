<script>
// @ts-nocheck

    import { page } from '$app/stores';

    const emojis = {
        404: '🧱',
        420: '🫠',
        500: '💥',
    };
</script>

<h1>
    <span>
        {emojis[$page.status] ?? emojis[500]}
    </span>

    {$page.status}
    {$page.error.message}
</h1>
