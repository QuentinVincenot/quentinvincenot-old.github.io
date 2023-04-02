//--------------------------------------------------------------------------------
//--- Input datasets
//--------------------------------------------------------------------------------

var setosa_datapoints = [
    {"sepalLength": 5.1, "sepalWidth": 3.5, "petalLength": 1.4, "petalWidth": 0.2, "species": "setosa"},
    {"sepalLength": 4.9, "sepalWidth": 3.0, "petalLength": 1.4, "petalWidth": 0.2, "species": "setosa"},
    {"sepalLength": 4.7, "sepalWidth": 3.2, "petalLength": 1.3, "petalWidth": 0.2, "species": "setosa"}];

var versicolor_datapoints = [
    {"sepalLength": 7.0, "sepalWidth": 3.2, "petalLength": 4.7, "petalWidth": 1.4, "species": "versicolor"},
    {"sepalLength": 6.4, "sepalWidth": 3.2, "petalLength": 4.5, "petalWidth": 1.5, "species": "versicolor"},
    {"sepalLength": 6.9, "sepalWidth": 3.1, "petalLength": 4.9, "petalWidth": 1.5, "species": "versicolor"}];

var virginica_datapoints = [
    {"sepalLength": 6.3, "sepalWidth": 3.3, "petalLength": 6.0, "petalWidth": 2.5, "species": "virginica"},
    {"sepalLength": 5.8, "sepalWidth": 2.7, "petalLength": 5.1, "petalWidth": 1.9, "species": "virginica"},
    {"sepalLength": 7.1, "sepalWidth": 3.0, "petalLength": 5.9, "petalWidth": 2.1, "species": "virginica"}];

//----------------------------------------
//--- Bubble chart
//----------------------------------------

var bubble_chart = new Chart(document.getElementById('bubble_chart').getContext('2d'), {
    type: 'bubble',
    data: {
        datasets: [{
            label: 'Dataset 1', data: [{x:12, y:48, r:7}, {x:17, y:24, r:15}, {x:8, y:25, r:10}],
            backgroundColor: 'rgba(255, 99, 132, 0.8)', borderColor: 'rgba(255, 99, 132, 1)'
        }, {
            label: 'Dataset 2', data: [{x:11, y:36, r:15}, {x:27, y:13, r:7}],
            backgroundColor: 'rgba(54, 162, 235, 0.8)', borderColor: 'rgba(54, 162, 235, 1)'
        }, {
            label: 'Dataset 3', data: [{x:14, y:30, r:10}, {x:19, y:42, r:7}, {x:22, y:15, r:15}],
            backgroundColor: 'rgba(75, 192, 192, 0.8)', borderColor: 'rgba(75, 192, 192, 1)'
        }]
    },
    options: {
        responsive: true, layout: {padding: 10},
        plugins: {
            title: {display: true, text: 'Bubble chart'},
            legend: {position: 'top'}
        }
    }
});

//----------------------------------------
//--- Vertical barchart
//----------------------------------------

var vertical_barchart = new Chart(document.getElementById('vertical_barchart').getContext('2d'), {
    type: 'bar',
    data: {
        labels: ['A', 'B', 'C'],
        datasets: [{
            label: 'Dataset 1', data: [12, 34, 27],
            backgroundColor: 'rgba(255, 99, 132, 0.8)', borderColor: 'rgba(255, 99, 132, 1)'
        }, {
            label: 'Dataset 2', data: [15, 30, 28],
            backgroundColor: 'rgba(54, 162, 235, 0.8)', borderColor: 'rgba(54, 162, 235, 1)'
        }, {
            label: 'Dataset 3', data: [15, 30, 28],
            backgroundColor: 'rgba(75, 192, 192, 0.8)', borderColor: 'rgba(75, 192, 192, 1)'
        }]
    },
    options: {
        responsive: true, layout: {padding: 10},
        indexAxis: 'y',
        elements: {bar: {borderWidth: 1}},            
        plugins: {
            title: {display: true, text: 'Vertical barchart'},
            legend: {position: 'top'}
        }
    }
});

//----------------------------------------
//--- Pie chart
//----------------------------------------

var pie_chart = new Chart(document.getElementById('pie_chart').getContext('2d'), {
    type: 'pie',
    data: {
        labels: ['A', 'B', 'C'],
        datasets: [{
            label: 'Dataset 1', data: [12, 34, 27],
            backgroundColor: ['rgba(255, 99, 132, 0.8)', 'rgba(54, 162, 235, 0.8)', 'rgba(75, 192, 192, 0.8)'],
            borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true, layout: {padding: 10},       
        plugins: {
            title: {display: true, text: 'Pie chart'},
            legend: {position: 'top'}
        }
    }
});
