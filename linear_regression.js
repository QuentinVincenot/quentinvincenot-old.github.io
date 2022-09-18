//--------------------------------------------------------------------------------
//--- Input datasets
//--------------------------------------------------------------------------------

var women_datapoints = [
    {x:119, y:54}, {x:123, y:52}, {x:126, y:57}, {x:131, y:57}, {x:134, y:55},
    {x:137, y:56}, {x:139, y:61}, {x:142, y:61}, {x:145, y:66}, {x:148, y:67},
    {x:153, y:63}, {x:156, y:66}, {x:160, y:66}, {x:164, y:72}, {x:165, y:70}
];

var men_datapoints = [
    {x:144, y:64}, {x:149, y:65}, {x:151, y:68}, {x:154, y:67}, {x:158, y:65},
    {x:160, y:70}, {x:162, y:67}, {x:166, y:68}, {x:167, y:75}, {x:171, y:72},
    {x:176, y:76}, {x:182, y:80}, {x:187, y:82}, {x:191, y:85}, {x:195, y:79}
];

var real_labels = [
    {x:119, y:52}, {x:123, y:54}, {x:126, y:55}, {x:131, y:57}, {x:134, y:58},
    {x:137, y:59}, {x:139, y:60}, {x:142, y:61}, {x:144, y:62}, {x:145, y:63},
    {x:148, y:64}, {x:149, y:65}, {x:151, y:65}, {x:153, y:66}, {x:154, y:66},
    {x:156, y:67}, {x:158, y:68}, {x:160, y:69}, {x:162, y:70}, {x:164, y:71},
    {x:165, y:71}, {x:166, y:71}, {x:167, y:72}, {x:171, y:73}, {x:176, y:75},
    {x:182, y:78}, {x:187, y:80}, {x:191, y:82}, {x:195, y:83}
]


//--------------------------------------------------------------------------------
//--- Linear model
//--------------------------------------------------------------------------------

function prepare_training_data(input_real_data) {
    let features = [], targets = [];
    for(var i=0; i<input_real_data.length; i++) {
        features.push(input_real_data[i].x) ;
        targets.push(input_real_data[i].y);
    }
    return {'features': features, 'targets': targets}
}

class LinearRegression {
    constructor() {
        this.coefficient = 0; this.bias = 0;
        console.log("LinearRegression model created !");
    }

    fit(input_features, expected_targets) {
        console.log("Starting to fit input features !");

        let predictions = [];
        for(let i=0; i<input_features.length; i++) {
            predictions.push(input_features[i] * this.coefficient + this.bias);
        }

        let current_loss_value = 0.0;
        for(let i=0; i<expected_targets.length; i++) {
            console.log('Target : ', expected_targets[i]);
            console.log('Prediction :', predictions[i]);
            let current_error = Math.pow(expected_targets[i] - predictions[i], 2);
            console.log('Error :', current_error);

            current_loss_value += current_error;
            console.log(current_loss_value);
        }
        console.log(current_loss_value);
    }
}

var linear_regression_model = new LinearRegression();

var prepared_data = prepare_training_data(real_labels);
var input_features = prepared_data['features'];
var expected_targets = prepared_data['targets'];

linear_regression_model.fit(input_features, expected_targets);


//--------------------------------------------------------------------------------
//--- Scatterplot
//--------------------------------------------------------------------------------

var initial_womenmen_scatterplot = new Chart(document.getElementById('women-men-scatterplot').getContext('2d'), {
    type: 'scatter',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Women', data: women_datapoints,
            pointRadius: 5, backgroundColor: 'rgba(50, 205, 50, 0.7)'
        }, {
            label: 'Men', data: men_datapoints,
            pointRadius: 5, backgroundColor: 'rgba(0, 150, 255, 0.7)'
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: { title: {display: true, text:'Height (cm)'}, min: 110, max: 200 },
            y: { title: {display: true, text:'Weight (kg)'}, min: 50, max: 95 }
        },
        plugins: {
            legend: {position: 'top'}, title: {display: true, text: 'People measurements'}
        }
    }
});


//--------------------------------------------------------------------------------
//--- Scatterplot with guessed relationship
//--------------------------------------------------------------------------------

var womenmen_scatterplot_with_guess = new Chart(document.getElementById('women-men-scatterplot-guess').getContext('2d'), {
    type: 'scatter',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Women', data: women_datapoints,
            pointRadius: 5, backgroundColor: 'rgba(50, 205, 50, 0.7)'
        }, {
            label: 'Men', data: men_datapoints,
            pointRadius: 5, backgroundColor: 'rgba(0, 150, 255, 0.7)'
        }, {
            type: 'line', label: 'Guessed relationship', data: [{x:115, y:51}, {x:197, y:84}],
            borderWith: 1, borderDash: [7, 3], borderColor: 'rgba(255, 99, 132, 0.5)'
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: { title: {display: true, text:'Height (cm)'}, min: 110, max: 200 },
            y: { title: {display: true, text:'Weight (kg)'}, min: 50, max: 95 }
        },
        plugins: {
            legend: {position: 'top'}, title: {display: true, text: 'People measurements'}
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
