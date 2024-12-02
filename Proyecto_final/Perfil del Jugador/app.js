document.addEventListener('DOMContentLoaded', () => {
    // Example chart data
    const ctx = document.getElementById('performance-chart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
                {
                    label: 'Performance',
                    data: [10, 20, 15, 25, 30, 40],
                    borderColor: 'red',
                    borderWidth: 2,
                    fill: false,
                },
            ],
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false,
                },
            },
        },
    });

    // Search button functionality
    document.getElementById('search-btn').addEventListener('click', () => {
        const username = document.getElementById('username').value;
        const region = document.getElementById('region').value;
        alert(`Searching for player: ${username} in region: ${region}`);
    });
});
