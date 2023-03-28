//--------------------------------------------------------------------------------
//--- Input datasets
//--------------------------------------------------------------------------------

var setosa_datapoints = [
    {"sepalLength": 5.1, "sepalWidth": 3.5, "petalLength": 1.4, "petalWidth": 0.2, "species": "setosa"},
    {"sepalLength": 4.9, "sepalWidth": 3.0, "petalLength": 1.4, "petalWidth": 0.2, "species": "setosa"},
    {"sepalLength": 4.7, "sepalWidth": 3.2, "petalLength": 1.3, "petalWidth": 0.2, "species": "setosa"},
    {"sepalLength": 4.6, "sepalWidth": 3.1, "petalLength": 1.5, "petalWidth": 0.2, "species": "setosa"},
    {"sepalLength": 5.0, "sepalWidth": 3.6, "petalLength": 1.4, "petalWidth": 0.2, "species": "setosa"},
    {"sepalLength": 5.4, "sepalWidth": 3.9, "petalLength": 1.7, "petalWidth": 0.4, "species": "setosa"},
    {"sepalLength": 4.6, "sepalWidth": 3.4, "petalLength": 1.4, "petalWidth": 0.3, "species": "setosa"},
    {"sepalLength": 5.0, "sepalWidth": 3.4, "petalLength": 1.5, "petalWidth": 0.2, "species": "setosa"},
    {"sepalLength": 4.4, "sepalWidth": 2.9, "petalLength": 1.4, "petalWidth": 0.2, "species": "setosa"},
    {"sepalLength": 4.9, "sepalWidth": 3.1, "petalLength": 1.5, "petalWidth": 0.1, "species": "setosa"},
    {"sepalLength": 5.4, "sepalWidth": 3.7, "petalLength": 1.5, "petalWidth": 0.2, "species": "setosa"},
    {"sepalLength": 4.8, "sepalWidth": 3.4, "petalLength": 1.6, "petalWidth": 0.2, "species": "setosa"},
    {"sepalLength": 4.8, "sepalWidth": 3.0, "petalLength": 1.4, "petalWidth": 0.1, "species": "setosa"},
    {"sepalLength": 4.3, "sepalWidth": 3.0, "petalLength": 1.1, "petalWidth": 0.1, "species": "setosa"},
    {"sepalLength": 5.8, "sepalWidth": 4.0, "petalLength": 1.2, "petalWidth": 0.2, "species": "setosa"},
    {"sepalLength": 5.7, "sepalWidth": 4.4, "petalLength": 1.5, "petalWidth": 0.4, "species": "setosa"},
    {"sepalLength": 5.4, "sepalWidth": 3.9, "petalLength": 1.3, "petalWidth": 0.4, "species": "setosa"},
    {"sepalLength": 5.1, "sepalWidth": 3.5, "petalLength": 1.4, "petalWidth": 0.3, "species": "setosa"},
    {"sepalLength": 5.7, "sepalWidth": 3.8, "petalLength": 1.7, "petalWidth": 0.3, "species": "setosa"},
    {"sepalLength": 5.1, "sepalWidth": 3.8, "petalLength": 1.5, "petalWidth": 0.3, "species": "setosa"},
    {"sepalLength": 5.4, "sepalWidth": 3.4, "petalLength": 1.7, "petalWidth": 0.2, "species": "setosa"},
    {"sepalLength": 5.1, "sepalWidth": 3.7, "petalLength": 1.5, "petalWidth": 0.4, "species": "setosa"},
    {"sepalLength": 4.6, "sepalWidth": 3.6, "petalLength": 1.0, "petalWidth": 0.2, "species": "setosa"},
    {"sepalLength": 5.1, "sepalWidth": 3.3, "petalLength": 1.7, "petalWidth": 0.5, "species": "setosa"},
    {"sepalLength": 4.8, "sepalWidth": 3.4, "petalLength": 1.9, "petalWidth": 0.2, "species": "setosa"},
    {"sepalLength": 5.0, "sepalWidth": 3.0, "petalLength": 1.6, "petalWidth": 0.2, "species": "setosa"},
    {"sepalLength": 5.0, "sepalWidth": 3.4, "petalLength": 1.6, "petalWidth": 0.4, "species": "setosa"},
    {"sepalLength": 5.2, "sepalWidth": 3.5, "petalLength": 1.5, "petalWidth": 0.2, "species": "setosa"},
    {"sepalLength": 5.2, "sepalWidth": 3.4, "petalLength": 1.4, "petalWidth": 0.2, "species": "setosa"},
    {"sepalLength": 4.7, "sepalWidth": 3.2, "petalLength": 1.6, "petalWidth": 0.2, "species": "setosa"},
    {"sepalLength": 4.8, "sepalWidth": 3.1, "petalLength": 1.6, "petalWidth": 0.2, "species": "setosa"},
    {"sepalLength": 5.4, "sepalWidth": 3.4, "petalLength": 1.5, "petalWidth": 0.4, "species": "setosa"},
    {"sepalLength": 5.2, "sepalWidth": 4.1, "petalLength": 1.5, "petalWidth": 0.1, "species": "setosa"},
    {"sepalLength": 5.5, "sepalWidth": 4.2, "petalLength": 1.4, "petalWidth": 0.2, "species": "setosa"},
    {"sepalLength": 4.9, "sepalWidth": 3.1, "petalLength": 1.5, "petalWidth": 0.2, "species": "setosa"},
    {"sepalLength": 5.0, "sepalWidth": 3.2, "petalLength": 1.2, "petalWidth": 0.2, "species": "setosa"},
    {"sepalLength": 5.5, "sepalWidth": 3.5, "petalLength": 1.3, "petalWidth": 0.2, "species": "setosa"},
    {"sepalLength": 4.9, "sepalWidth": 3.6, "petalLength": 1.4, "petalWidth": 0.1, "species": "setosa"},
    {"sepalLength": 4.4, "sepalWidth": 3.0, "petalLength": 1.3, "petalWidth": 0.2, "species": "setosa"},
    {"sepalLength": 5.1, "sepalWidth": 3.4, "petalLength": 1.5, "petalWidth": 0.2, "species": "setosa"},
    {"sepalLength": 5.0, "sepalWidth": 3.5, "petalLength": 1.3, "petalWidth": 0.3, "species": "setosa"},
    {"sepalLength": 4.5, "sepalWidth": 2.3, "petalLength": 1.3, "petalWidth": 0.3, "species": "setosa"},
    {"sepalLength": 4.4, "sepalWidth": 3.2, "petalLength": 1.3, "petalWidth": 0.2, "species": "setosa"},
    {"sepalLength": 5.0, "sepalWidth": 3.5, "petalLength": 1.6, "petalWidth": 0.6, "species": "setosa"},
    {"sepalLength": 5.1, "sepalWidth": 3.8, "petalLength": 1.9, "petalWidth": 0.4, "species": "setosa"},
    {"sepalLength": 4.8, "sepalWidth": 3.0, "petalLength": 1.4, "petalWidth": 0.3, "species": "setosa"},
    {"sepalLength": 5.1, "sepalWidth": 3.8, "petalLength": 1.6, "petalWidth": 0.2, "species": "setosa"},
    {"sepalLength": 4.6, "sepalWidth": 3.2, "petalLength": 1.4, "petalWidth": 0.2, "species": "setosa"},
    {"sepalLength": 5.3, "sepalWidth": 3.7, "petalLength": 1.5, "petalWidth": 0.2, "species": "setosa"},
    {"sepalLength": 5.0, "sepalWidth": 3.3, "petalLength": 1.4, "petalWidth": 0.2, "species": "setosa"}];

var versicolor_datapoints = [
    {"sepalLength": 7.0, "sepalWidth": 3.2, "petalLength": 4.7, "petalWidth": 1.4, "species": "versicolor"},
    {"sepalLength": 6.4, "sepalWidth": 3.2, "petalLength": 4.5, "petalWidth": 1.5, "species": "versicolor"},
    {"sepalLength": 6.9, "sepalWidth": 3.1, "petalLength": 4.9, "petalWidth": 1.5, "species": "versicolor"},
    {"sepalLength": 5.5, "sepalWidth": 2.3, "petalLength": 4.0, "petalWidth": 1.3, "species": "versicolor"},
    {"sepalLength": 6.5, "sepalWidth": 2.8, "petalLength": 4.6, "petalWidth": 1.5, "species": "versicolor"},
    {"sepalLength": 5.7, "sepalWidth": 2.8, "petalLength": 4.5, "petalWidth": 1.3, "species": "versicolor"},
    {"sepalLength": 6.3, "sepalWidth": 3.3, "petalLength": 4.7, "petalWidth": 1.6, "species": "versicolor"},
    {"sepalLength": 4.9, "sepalWidth": 2.4, "petalLength": 3.3, "petalWidth": 1.0, "species": "versicolor"},
    {"sepalLength": 6.6, "sepalWidth": 2.9, "petalLength": 4.6, "petalWidth": 1.3, "species": "versicolor"},
    {"sepalLength": 5.2, "sepalWidth": 2.7, "petalLength": 3.9, "petalWidth": 1.4, "species": "versicolor"},
    {"sepalLength": 5.0, "sepalWidth": 2.0, "petalLength": 3.5, "petalWidth": 1.0, "species": "versicolor"},
    {"sepalLength": 5.9, "sepalWidth": 3.0, "petalLength": 4.2, "petalWidth": 1.5, "species": "versicolor"},
    {"sepalLength": 6.0, "sepalWidth": 2.2, "petalLength": 4.0, "petalWidth": 1.0, "species": "versicolor"},
    {"sepalLength": 6.1, "sepalWidth": 2.9, "petalLength": 4.7, "petalWidth": 1.4, "species": "versicolor"},
    {"sepalLength": 5.6, "sepalWidth": 2.9, "petalLength": 3.6, "petalWidth": 1.3, "species": "versicolor"},
    {"sepalLength": 6.7, "sepalWidth": 3.1, "petalLength": 4.4, "petalWidth": 1.4, "species": "versicolor"},
    {"sepalLength": 5.6, "sepalWidth": 3.0, "petalLength": 4.5, "petalWidth": 1.5, "species": "versicolor"},
    {"sepalLength": 5.8, "sepalWidth": 2.7, "petalLength": 4.1, "petalWidth": 1.0, "species": "versicolor"},
    {"sepalLength": 6.2, "sepalWidth": 2.2, "petalLength": 4.5, "petalWidth": 1.5, "species": "versicolor"},
    {"sepalLength": 5.6, "sepalWidth": 2.5, "petalLength": 3.9, "petalWidth": 1.1, "species": "versicolor"},
    {"sepalLength": 5.9, "sepalWidth": 3.2, "petalLength": 4.8, "petalWidth": 1.8, "species": "versicolor"},
    {"sepalLength": 6.1, "sepalWidth": 2.8, "petalLength": 4.0, "petalWidth": 1.3, "species": "versicolor"},
    {"sepalLength": 6.3, "sepalWidth": 2.5, "petalLength": 4.9, "petalWidth": 1.5, "species": "versicolor"},
    {"sepalLength": 6.1, "sepalWidth": 2.8, "petalLength": 4.7, "petalWidth": 1.2, "species": "versicolor"},
    {"sepalLength": 6.4, "sepalWidth": 2.9, "petalLength": 4.3, "petalWidth": 1.3, "species": "versicolor"},
    {"sepalLength": 6.6, "sepalWidth": 3.0, "petalLength": 4.4, "petalWidth": 1.4, "species": "versicolor"},
    {"sepalLength": 6.8, "sepalWidth": 2.8, "petalLength": 4.8, "petalWidth": 1.4, "species": "versicolor"},
    {"sepalLength": 6.7, "sepalWidth": 3.0, "petalLength": 5.0, "petalWidth": 1.7, "species": "versicolor"},
    {"sepalLength": 6.0, "sepalWidth": 2.9, "petalLength": 4.5, "petalWidth": 1.5, "species": "versicolor"},
    {"sepalLength": 5.7, "sepalWidth": 2.6, "petalLength": 3.5, "petalWidth": 1.0, "species": "versicolor"},
    {"sepalLength": 5.5, "sepalWidth": 2.4, "petalLength": 3.8, "petalWidth": 1.1, "species": "versicolor"},
    {"sepalLength": 5.5, "sepalWidth": 2.4, "petalLength": 3.7, "petalWidth": 1.0, "species": "versicolor"},
    {"sepalLength": 5.8, "sepalWidth": 2.7, "petalLength": 3.9, "petalWidth": 1.2, "species": "versicolor"},
    {"sepalLength": 6.0, "sepalWidth": 2.7, "petalLength": 5.1, "petalWidth": 1.6, "species": "versicolor"},
    {"sepalLength": 5.4, "sepalWidth": 3.0, "petalLength": 4.5, "petalWidth": 1.5, "species": "versicolor"},
    {"sepalLength": 6.0, "sepalWidth": 3.4, "petalLength": 4.5, "petalWidth": 1.6, "species": "versicolor"},
    {"sepalLength": 6.7, "sepalWidth": 3.1, "petalLength": 4.7, "petalWidth": 1.5, "species": "versicolor"},
    {"sepalLength": 6.3, "sepalWidth": 2.3, "petalLength": 4.4, "petalWidth": 1.3, "species": "versicolor"},
    {"sepalLength": 5.6, "sepalWidth": 3.0, "petalLength": 4.1, "petalWidth": 1.3, "species": "versicolor"},
    {"sepalLength": 5.5, "sepalWidth": 2.5, "petalLength": 4.0, "petalWidth": 1.3, "species": "versicolor"},
    {"sepalLength": 5.5, "sepalWidth": 2.6, "petalLength": 4.4, "petalWidth": 1.2, "species": "versicolor"},
    {"sepalLength": 6.1, "sepalWidth": 3.0, "petalLength": 4.6, "petalWidth": 1.4, "species": "versicolor"},
    {"sepalLength": 5.8, "sepalWidth": 2.6, "petalLength": 4.0, "petalWidth": 1.2, "species": "versicolor"},
    {"sepalLength": 5.0, "sepalWidth": 2.3, "petalLength": 3.3, "petalWidth": 1.0, "species": "versicolor"},
    {"sepalLength": 5.6, "sepalWidth": 2.7, "petalLength": 4.2, "petalWidth": 1.3, "species": "versicolor"},
    {"sepalLength": 5.7, "sepalWidth": 3.0, "petalLength": 4.2, "petalWidth": 1.2, "species": "versicolor"},
    {"sepalLength": 5.7, "sepalWidth": 2.9, "petalLength": 4.2, "petalWidth": 1.3, "species": "versicolor"},
    {"sepalLength": 6.2, "sepalWidth": 2.9, "petalLength": 4.3, "petalWidth": 1.3, "species": "versicolor"},
    {"sepalLength": 5.1, "sepalWidth": 2.5, "petalLength": 3.0, "petalWidth": 1.1, "species": "versicolor"},
    {"sepalLength": 5.7, "sepalWidth": 2.8, "petalLength": 4.1, "petalWidth": 1.3, "species": "versicolor"}];

var virginica_datapoints = [
    {"sepalLength": 6.3, "sepalWidth": 3.3, "petalLength": 6.0, "petalWidth": 2.5, "species": "virginica"},
    {"sepalLength": 5.8, "sepalWidth": 2.7, "petalLength": 5.1, "petalWidth": 1.9, "species": "virginica"},
    {"sepalLength": 7.1, "sepalWidth": 3.0, "petalLength": 5.9, "petalWidth": 2.1, "species": "virginica"},
    {"sepalLength": 6.3, "sepalWidth": 2.9, "petalLength": 5.6, "petalWidth": 1.8, "species": "virginica"},
    {"sepalLength": 6.5, "sepalWidth": 3.0, "petalLength": 5.8, "petalWidth": 2.2, "species": "virginica"},
    {"sepalLength": 7.6, "sepalWidth": 3.0, "petalLength": 6.6, "petalWidth": 2.1, "species": "virginica"},
    {"sepalLength": 4.9, "sepalWidth": 2.5, "petalLength": 4.5, "petalWidth": 1.7, "species": "virginica"},
    {"sepalLength": 7.3, "sepalWidth": 2.9, "petalLength": 6.3, "petalWidth": 1.8, "species": "virginica"},
    {"sepalLength": 6.7, "sepalWidth": 2.5, "petalLength": 5.8, "petalWidth": 1.8, "species": "virginica"},
    {"sepalLength": 7.2, "sepalWidth": 3.6, "petalLength": 6.1, "petalWidth": 2.5, "species": "virginica"},
    {"sepalLength": 6.5, "sepalWidth": 3.2, "petalLength": 5.1, "petalWidth": 2.0, "species": "virginica"},
    {"sepalLength": 6.4, "sepalWidth": 2.7, "petalLength": 5.3, "petalWidth": 1.9, "species": "virginica"},
    {"sepalLength": 6.8, "sepalWidth": 3.0, "petalLength": 5.5, "petalWidth": 2.1, "species": "virginica"},
    {"sepalLength": 5.7, "sepalWidth": 2.5, "petalLength": 5.0, "petalWidth": 2.0, "species": "virginica"},
    {"sepalLength": 5.8, "sepalWidth": 2.8, "petalLength": 5.1, "petalWidth": 2.4, "species": "virginica"},
    {"sepalLength": 6.4, "sepalWidth": 3.2, "petalLength": 5.3, "petalWidth": 2.3, "species": "virginica"},
    {"sepalLength": 6.5, "sepalWidth": 3.0, "petalLength": 5.5, "petalWidth": 1.8, "species": "virginica"},
    {"sepalLength": 7.7, "sepalWidth": 3.8, "petalLength": 6.7, "petalWidth": 2.2, "species": "virginica"},
    {"sepalLength": 7.7, "sepalWidth": 2.6, "petalLength": 6.9, "petalWidth": 2.3, "species": "virginica"},
    {"sepalLength": 6.0, "sepalWidth": 2.2, "petalLength": 5.0, "petalWidth": 1.5, "species": "virginica"},
    {"sepalLength": 6.9, "sepalWidth": 3.2, "petalLength": 5.7, "petalWidth": 2.3, "species": "virginica"},
    {"sepalLength": 5.6, "sepalWidth": 2.8, "petalLength": 4.9, "petalWidth": 2.0, "species": "virginica"},
    {"sepalLength": 7.7, "sepalWidth": 2.8, "petalLength": 6.7, "petalWidth": 2.0, "species": "virginica"},
    {"sepalLength": 6.3, "sepalWidth": 2.7, "petalLength": 4.9, "petalWidth": 1.8, "species": "virginica"},
    {"sepalLength": 6.7, "sepalWidth": 3.3, "petalLength": 5.7, "petalWidth": 2.1, "species": "virginica"},
    {"sepalLength": 7.2, "sepalWidth": 3.2, "petalLength": 6.0, "petalWidth": 1.8, "species": "virginica"},
    {"sepalLength": 6.2, "sepalWidth": 2.8, "petalLength": 4.8, "petalWidth": 1.8, "species": "virginica"},
    {"sepalLength": 6.1, "sepalWidth": 3.0, "petalLength": 4.9, "petalWidth": 1.8, "species": "virginica"},
    {"sepalLength": 6.4, "sepalWidth": 2.8, "petalLength": 5.6, "petalWidth": 2.1, "species": "virginica"},
    {"sepalLength": 7.2, "sepalWidth": 3.0, "petalLength": 5.8, "petalWidth": 1.6, "species": "virginica"},
    {"sepalLength": 7.4, "sepalWidth": 2.8, "petalLength": 6.1, "petalWidth": 1.9, "species": "virginica"},
    {"sepalLength": 7.9, "sepalWidth": 3.8, "petalLength": 6.4, "petalWidth": 2.0, "species": "virginica"},
    {"sepalLength": 6.4, "sepalWidth": 2.8, "petalLength": 5.6, "petalWidth": 2.2, "species": "virginica"},
    {"sepalLength": 6.3, "sepalWidth": 2.8, "petalLength": 5.1, "petalWidth": 1.5, "species": "virginica"},
    {"sepalLength": 6.1, "sepalWidth": 2.6, "petalLength": 5.6, "petalWidth": 1.4, "species": "virginica"},
    {"sepalLength": 7.7, "sepalWidth": 3.0, "petalLength": 6.1, "petalWidth": 2.3, "species": "virginica"},
    {"sepalLength": 6.3, "sepalWidth": 3.4, "petalLength": 5.6, "petalWidth": 2.4, "species": "virginica"},
    {"sepalLength": 6.4, "sepalWidth": 3.1, "petalLength": 5.5, "petalWidth": 1.8, "species": "virginica"},
    {"sepalLength": 6.0, "sepalWidth": 3.0, "petalLength": 4.8, "petalWidth": 1.8, "species": "virginica"},
    {"sepalLength": 6.9, "sepalWidth": 3.1, "petalLength": 5.4, "petalWidth": 2.1, "species": "virginica"},
    {"sepalLength": 6.7, "sepalWidth": 3.1, "petalLength": 5.6, "petalWidth": 2.4, "species": "virginica"},
    {"sepalLength": 6.9, "sepalWidth": 3.1, "petalLength": 5.1, "petalWidth": 2.3, "species": "virginica"},
    {"sepalLength": 5.8, "sepalWidth": 2.7, "petalLength": 5.1, "petalWidth": 1.9, "species": "virginica"},
    {"sepalLength": 6.8, "sepalWidth": 3.2, "petalLength": 5.9, "petalWidth": 2.3, "species": "virginica"},
    {"sepalLength": 6.7, "sepalWidth": 3.3, "petalLength": 5.7, "petalWidth": 2.5, "species": "virginica"},
    {"sepalLength": 6.7, "sepalWidth": 3.0, "petalLength": 5.2, "petalWidth": 2.3, "species": "virginica"},
    {"sepalLength": 6.3, "sepalWidth": 2.5, "petalLength": 5.0, "petalWidth": 1.9, "species": "virginica"},
    {"sepalLength": 6.5, "sepalWidth": 3.0, "petalLength": 5.2, "petalWidth": 2.0, "species": "virginica"},
    {"sepalLength": 6.2, "sepalWidth": 3.4, "petalLength": 5.4, "petalWidth": 2.3, "species": "virginica"},
    {"sepalLength": 5.9, "sepalWidth": 3.0, "petalLength": 5.1, "petalWidth": 1.8, "species": "virginica"}];

//----------------------------------------
//--- Donut
//----------------------------------------

var iris_donut = new Chart(document.getElementById('iris_donut').getContext('2d'), {
    type: 'doughnut',
    data: {
        labels: ['Setosa', 'Versicolor', 'Virginica'],
        datasets: [{
            label: 'Iris amount',
            data: [setosa_datapoints.length, versicolor_datapoints.length, virginica_datapoints.length],
            backgroundColor: ['rgba(0, 190, 0, 0.4)', 'rgba(50, 0, 255, 0.4)', 'rgba(235, 80, 80, 0.4)'],
            borderColor: ['rgba(0, 190, 0, 0.8)', 'rgba(50, 0, 255, 0.8)', 'rgba(235, 80, 80, 0.8)'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true, layout: {padding: 10},
        cutout: '80%',
        plugins: {
            title: {display: true, text: 'Iris sample distribution among classes'},
            legend: {position: 'top'}
        }
    }
});


//----------------------------------------
//--- Boxplot
//----------------------------------------

// Prepare datapoints from Iris Setosa (sepals/petals length/width) into appropriate boxplot objects
var setosa_sepal_lengths = []; var setosa_sepal_widths = [];
var setosa_petal_lengths = []; var setosa_petal_widths = [];
for(var i=0; i<setosa_datapoints.length; i++) {
    setosa_sepal_lengths.push(setosa_datapoints[i].sepalLength);
    setosa_sepal_widths.push(setosa_datapoints[i].sepalWidth);
    setosa_petal_lengths.push(setosa_datapoints[i].petalLength);
    setosa_petal_widths.push(setosa_datapoints[i].petalWidth);
}

// Prepare datapoints from Iris Versicolor (sepals/petals length/width) into appropriate boxplot objects
var versicolor_sepal_lengths = []; var versicolor_sepal_widths = [];
var versicolor_petal_lengths = []; var versicolor_petal_widths = [];
for(var i=0; i<versicolor_datapoints.length; i++) {
    versicolor_sepal_lengths.push(versicolor_datapoints[i].sepalLength);
    versicolor_sepal_widths.push(versicolor_datapoints[i].sepalWidth);
    versicolor_petal_lengths.push(versicolor_datapoints[i].petalLength);
    versicolor_petal_widths.push(versicolor_datapoints[i].petalWidth);
}

// Prepare datapoints from Iris Virginica (sepals/petals length/width) into appropriate boxplot objects
var virginica_sepal_lengths = []; var virginica_sepal_widths = [];
var virginica_petal_lengths = []; var virginica_petal_widths = [];
for(var i=0; i<virginica_datapoints.length; i++) {
    virginica_sepal_lengths.push(virginica_datapoints[i].sepalLength);
    virginica_sepal_widths.push(virginica_datapoints[i].sepalWidth);
    virginica_petal_lengths.push(virginica_datapoints[i].petalLength);
    virginica_petal_widths.push(virginica_datapoints[i].petalWidth);
}

var iris_features_boxplot = new Chart(document.getElementById('iris_features_boxplot').getContext('2d'), {
    type: 'boxplot',
    data: {
        labels: ['Sepal length', 'Sepal width', 'Petal length', 'Petal width'],
        datasets: [{
            label: 'Setosa',
            data: [setosa_sepal_lengths, setosa_sepal_widths, setosa_petal_lengths, setosa_petal_widths],
            backgroundColor: 'rgba(0, 190, 0, 0.4)', borderColor: 'rgba(0, 190, 0, 0.8)',
            borderWidth: 1
        },
        {
            label: 'Versicolor',
            data: [versicolor_sepal_lengths, versicolor_sepal_widths, versicolor_petal_lengths, versicolor_petal_widths],
            backgroundColor: 'rgba(50, 0, 255, 0.4)', borderColor: 'rgba(50, 0, 255, 0.8)',
            borderWidth: 1
        },
        {
            label: 'Virginica',
            data: [virginica_sepal_lengths, virginica_sepal_widths, virginica_petal_lengths, virginica_petal_widths],
            backgroundColor: 'rgba(235, 80, 80, 0.4)', borderColor: 'rgba(235, 80, 80, 0.8)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true, layout: {padding: 10},
        indexAxis: 'y',
        scales: {y: {beginAtZero: true}},
        plugins: {
            title: {display: true, text: 'Features distributions of Iris classes'},
            legend: {position: 'top'}
        }
    }
});


//--------------------------------------------------------------------------------
//--- Scatterplot
//--------------------------------------------------------------------------------

// Prepare datapoints from Iris Setosa (petals length/width) into appropriate scatterplot objects
var setosa_scatterplot_dataset = [];
for(var i=0; i<setosa_datapoints.length; i++) {
    var setosa_temp_object = {x: setosa_datapoints[i].petalLength, y: setosa_datapoints[i].petalWidth};
    setosa_scatterplot_dataset.push(setosa_temp_object);
}

// Prepare datapoints from Iris Versicolor (petals length/width) into appropriate scatterplot objects
var versicolor_scatterplot_dataset = [];
for(var i=0; i<versicolor_datapoints.length; i++) {
    var versicolor_temp_object = {x: versicolor_datapoints[i].petalLength, y: versicolor_datapoints[i].petalWidth};
    versicolor_scatterplot_dataset.push(versicolor_temp_object);
}

// Prepare datapoints from Iris Virginica (petals length/width) into appropriate scatterplot objects
var virginica_scatterplot_dataset = [];
for(var i=0; i<virginica_datapoints.length; i++) {
    var virginica_temp_object = {x: virginica_datapoints[i].petalLength, y: virginica_datapoints[i].petalWidth};
    virginica_scatterplot_dataset.push(virginica_temp_object);
}

var iris_petals_scatterplot = new Chart(document.getElementById('iris_petals_scatterplot').getContext('2d'), {
    type: 'scatter',
    data: {
        datasets: [{
            label: 'Setosa', data: setosa_scatterplot_dataset,
            pointRadius: 5, pointHoverRadius: 6, pointStyle: 'circle',
            backgroundColor: 'rgba(0, 190, 0, 0.5)', pointHoverBackgroundColor: 'rgba(0, 190, 0, 0.7)',
            borderColor: 'rgba(0, 190, 0, 0.8)'
        }, {
            label: 'Versicolor', data: versicolor_scatterplot_dataset,
            pointRadius: 5, pointHoverRadius: 6, pointStyle: 'rectRot',
            backgroundColor: 'rgba(50, 0, 255, 0.5)', pointHoverBackgroundColor: 'rgba(50, 0, 255, 0.7)',
            borderColor: 'rgba(50, 0, 255, 0.8)'
        }, {
            label: 'Virginica', data: virginica_scatterplot_dataset,
            pointRadius: 5, pointHoverRadius: 6, pointStyle: 'triangle',
            backgroundColor: 'rgba(235, 80, 80, 0.5)', pointHoverBackgroundColor: 'rgba(235, 80, 80, 0.7)',
            borderColor: 'rgba(235, 80, 80, 0.8)'
        }]
    },
    options: {
        responsive: true, layout: {padding: 10},
        scales: {
            x: { title: {display: true, text:'Petal length'}, min: 0.5, max: 7.0 },
            y: { title: {display: true, text:'Petal width'}, min: 0.0, max: 3.0 }
        },
        plugins: {
            title: {display: true, text: 'Petal features distribution of Iris classes'},
            legend: {position: 'top'}
        }
    }
});


//----------------------------------------
//--- Radar chart
//----------------------------------------

// Prepare datapoints from Iris Setosa (petals length/width) into appropriate radar objects
var setosa_radar_dataset = [0, 0, 0, 0];
for(var i=0; i<setosa_datapoints.length; i++) {
    setosa_radar_dataset[0] += setosa_datapoints[i].sepalLength;
    setosa_radar_dataset[1] += setosa_datapoints[i].sepalWidth;
    setosa_radar_dataset[2] += setosa_datapoints[i].petalLength;
    setosa_radar_dataset[3] += setosa_datapoints[i].petalWidth;
    if(i == setosa_datapoints.length - 1) {
        setosa_radar_dataset[0] /= setosa_datapoints.length;
        setosa_radar_dataset[1] /= setosa_datapoints.length;
        setosa_radar_dataset[2] /= setosa_datapoints.length;
        setosa_radar_dataset[3] /= setosa_datapoints.length;
    }
}

// Prepare datapoints from Iris Versicolor (petals length/width) into appropriate radar objects
var versicolor_radar_dataset = [0, 0, 0, 0];
for(var i=0; i<versicolor_datapoints.length; i++) {
    versicolor_radar_dataset[0] += versicolor_datapoints[i].sepalLength;
    versicolor_radar_dataset[1] += versicolor_datapoints[i].sepalWidth;
    versicolor_radar_dataset[2] += versicolor_datapoints[i].petalLength;
    versicolor_radar_dataset[3] += versicolor_datapoints[i].petalWidth;
    if(i == versicolor_datapoints.length - 1) {
        versicolor_radar_dataset[0] /= versicolor_datapoints.length;
        versicolor_radar_dataset[1] /= versicolor_datapoints.length;
        versicolor_radar_dataset[2] /= versicolor_datapoints.length;
        versicolor_radar_dataset[3] /= versicolor_datapoints.length;
    }
}

// Prepare datapoints from Iris Virginica (petals length/width) into appropriate radar objects
var virginica_radar_dataset = [0, 0, 0, 0];
for(var i=0; i<virginica_datapoints.length; i++) {
    virginica_radar_dataset[0] += virginica_datapoints[i].sepalLength;
    virginica_radar_dataset[1] += virginica_datapoints[i].sepalWidth;
    virginica_radar_dataset[2] += virginica_datapoints[i].petalLength;
    virginica_radar_dataset[3] += virginica_datapoints[i].petalWidth;
    if(i == virginica_datapoints.length - 1) {
        virginica_radar_dataset[0] /= virginica_datapoints.length;
        virginica_radar_dataset[1] /= virginica_datapoints.length;
        virginica_radar_dataset[2] /= virginica_datapoints.length;
        virginica_radar_dataset[3] /= virginica_datapoints.length;
    }
}

// Compute the max span of the radar based on the Iris max features values
var maxRadarValue = Math.max(Math.max(setosa_radar_dataset), Math.max(versicolor_radar_dataset), Math.max(virginica_radar_dataset)) + 0.2;

var iris_features_radar = new Chart(document.getElementById('iris_features_radar').getContext('2d'), {
    type: 'radar',
    data: {
        labels: ['Sepal length', 'Sepal width', 'Petal length', 'Petal width'],
        datasets: [{
            label: 'Setosa',
            data: setosa_radar_dataset,
            fill: true, pointRadius: 4, pointHoverRadius: 5,
            backgroundColor: 'rgba(0, 190, 0, 0.4)', pointHoverBackgroundColor: 'rgba(0, 190, 0, 0.8)'
        }, {
            label: 'Versicolor',
            data: versicolor_radar_dataset,
            fill: true, pointRadius: 4, pointHoverRadius: 5,
            backgroundColor: 'rgba(50, 0, 255, 0.4)', pointHoverBackgroundColor: 'rgba(50, 0, 255, 0.8)'
        }, {
            label: 'Virginica',
            data: virginica_radar_dataset,
            fill: true, pointRadius: 4, pointHoverRadius: 5,
            backgroundColor: 'rgba(235, 80, 80, 0.4)', pointHoverBackgroundColor: 'rgba(235, 80, 80, 0.8)'
        }]
    },
    options: {
        responsive: true, layout: {padding: 10},
        scales: {
            r: {
                suggestedMin: 0.0, suggestedMax: maxRadarValue,
                ticks: {backdropColor: 'rgba(255, 255, 255, 0.0)'}
            }
        },
        plugins: {
            title: {display: true, text: 'Features mean values of Iris classes'},
            filler: {propagate: false},
            'samples-filler-analyser': {target: 'chart-analyser'}
        },
        interaction: {
            intersect: false
        }
    }
});
