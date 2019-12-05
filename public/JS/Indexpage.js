//pie
var ctxP = document.getElementById("pieChart").getContext('2d');

var myPieChart = new Chart(ctxP, {
    type: 'pie',
    data: {
        labels: ["Health", "Travel", "Food&Drink", "Transportation", "Misc", "Services"],
        datasets: [{
            data: [100, 100, 100, 100, 100, 100],
            backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#0000ff", "#ffff00", "#6a0dad "],
            hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"]
        }]
    },
    options: {
        responsive: true
    }
});

// Line
var ctxL = document.getElementById("lineChart").getContext('2d');
var myLineChart = new Chart(ctxL, {
    type: 'line',
    data: {
        labels: ["8 AM", "10 AM", "12 PM", "2 PM", "4 PM", "6 PM", "8 PM"],
        datasets: [{
            fill: false,
            borderColor: "#673ab7",
            pointBackgroundColor: "#673ab7",
            data: [885, 884, 887, 883, 888, 889, 888]
        }]
    },
    options: {
        responsive: false,
        legend: {
            display: false
        },
        elements: {
            line: {
                tension: 0.0
            }
        },
        scales: {
            xAxes: [{
                gridLines: {
                    display: false,
                },
                ticks: {
                    padding: 15,
                    height: 30
                }
            }],
            yAxes: [{
                gridLines: {
                    drawBorder: false
                },
                ticks: {
                    maxTicksLimit: 5,
                    padding: 15,
                    min: 880,
                    max: 890
                }
            }]
        }
    }
});


