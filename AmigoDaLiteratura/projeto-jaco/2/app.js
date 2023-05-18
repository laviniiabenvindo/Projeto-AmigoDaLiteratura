const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'pie',
    data: {
        datasets: [{
            data: [50, 40, 30, 50],
            backgroundColor: [
                '#E5DDF3',
                '#6C5399',
                '#AF85F8',
                '#8644FA'
            ]
        }]
    }
})