document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('vehicleChart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Active Vehicles', 'In-Active Vehicles'],
            datasets: [{
                data: [60, 40],
                backgroundColor: ['#e0e0e0', '#007bff']
            }]
        },
        options: {
            responsive: true
        }
    });
});
