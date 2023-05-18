const grafico2 = document.querySelector('.grafico2')

new Chart(grafico2, {
    type: 'pie',
    data: {
        datasets: [{
            data: [59, 78, 10],
            backgroundColor: [
                '#E5DDF3',
                '#6C5399',
                '#AF85F8'
            ]
        }]
    }
})