//----------------------------------------
//--- Scatterplot
//----------------------------------------

var myChart3 = new Chart(document.getElementById('women-men-scatterplot').getContext('2d'), {
    type: 'scatter',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Women',
            data: [
                {x:119, y:54}, {x:123, y:52}, {x:126, y:57},
                {x:134, y:55}, {x:137, y:56}, {x:139, y:61},
                {x:145, y:66}, {x:148, y:67}, {x:153, y:63},
                {x:156, y:66}, {x:160, y:66}, {x:164, y:72}
            ],
            pointRadius: 5,
            backgroundColor: 'rgba(50, 205, 50, 0.7)'
        }, {
            label: 'Men',
            data: [
                {x:130, y:55}, {x:132, y:60}, {x:140, y:68},
                {x:151, y:68}, {x:154, y:67}, {x:160, y:70},
                {x:167, y:75}, {x:178, y:70}, {x:176, y:76},
                {x:183, y:78}, {x:182, y:80}, {x:187, y:82},
                {x:195, y:79}, {x:191, y:85}, {x:198, y:91}
            ],
            pointRadius: 5,
            backgroundColor: 'rgba(0, 150, 255, 0.7)'
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                title: {display: true, text:'Height (cm)'},
                min: 110, max: 200
            },
            y: {
                title: {display: true, text:'Weight (kg)'},
                min: 50, max: 95
            }
        },
        plugins: {
            legend: {position: 'top'},
            title: {display: true, text: 'People measurements'}
        }
    }
});


//----------------------------------------
//--- Line chart
//----------------------------------------

/*const lineChart = new Chart(document.getElementById('lineChart').getContext('2d'), {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },
    options: {responsive: true, maintainAspectRatio: false}
});*/


//----------------------------------------
//--- Bar chart
//----------------------------------------

/*var barChart = new Chart(document.getElementById('barChart').getContext('2d'), {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)', 'rgba(75, 172, 172, 0.5)',
                'rgba(153, 102, 255, 0.5)', 'rgba(255, 159, 64, 0.5)'
            ],
            borderColor: [
                'rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)', 'rgba(75, 172, 172, 1)',
                'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true, maintainAspectRatio: false,
        scales: {yAxes: [{ticks: {beginAtZero: true}}]}
    }
});*/


//----------------------------------------
//--- Radar chart
//----------------------------------------

/*var radarChart = new Chart(document.getElementById('radarChart').getContext('2d'), {
    type: 'radar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
        datasets: [{
            label: 'D0',
            data: [1, 2, 23, 45, 14, 12, 19, 43]
        }]
    },
    options: {
        plugins: {
            filler: {
                propagate: false
            },
            'samples-filler-analyser': {
                target: 'chart-analyser'
            }
        },
        interaction: {
            intersect: false
        }
    }
});*/
