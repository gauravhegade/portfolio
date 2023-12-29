<script lang="ts">
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    function dateToString(Date) {
        return `${
            months[Date.getMonth() - 1]
        } ${Date.getFullYear()}`.toString();
    }

    function formatDateString(startDate, endDate) {
        return `${dateToString(startDate)} - ${dateToString(endDate)}`;
    }

    const jobs = [
        {
            title: "Summer intern",
            companyName: "RVCE Cisco IoT Centre of Excellence",
            location: "Bangalore",
            locType: "On-site",
            startDate: new Date(2023, 5),
            endDate: new Date(2023, 5),
            description: [
                "Worked on developing a Micro Weather Station for sugarcane fields",
                "Had the privilege to work alongside industry experts",
                "Used appropriate sensors and made a custom web-based dashboard that runs locally and displays the data collected in real-time, updated every 10 seconds",
            ],
            tags: "Python, Internet of Things(IoT), RaspberryPi, Plotly, Dash",
        },
        {
            title: "Project Intern",
            companyName: "Softmusk Solutions Pvt. Ltd.",
            location: "Belgaum",
            locType: "On-site",
            startDate: new Date(2022, 3),
            endDate: new Date(2022, 6),
            description: [
                "Worked as an intern at Softmusk Solutions to develop an Enterprise Resource Planning (ERP) App for my Technical Education College.",
                "Adapted to varying work environments while providing necessary training to the college faculty enabling smooth adoption of our system.",
                "Demonstrated willingness to learn and paid attention to detail during the internship period.",
            ],
            tags: "Django, SQLite, Python, Web Development",
        },
    ];
</script>

{#each jobs as job}
    <p>{job.title}</p>
    <p>{job.companyName}</p>
    <p>{job.location}</p>
    <p>{job.locType}</p>

    {#if dateToString(job.startDate) === dateToString(job.endDate)}
        <p>{dateToString(job.startDate)}</p>
    {:else}
        <p>{formatDateString(job.startDate, job.endDate)}</p>
    {/if}

    {#each job.description as jd}
        <p>{jd}</p>
    {/each}

    <p>{job.tags}</p>
{/each}
