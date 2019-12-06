//pie
var ctxP = document.getElementById("pieChart").getContext('2d');
$.get('/expenses').then(expenses => {
    console.log(expenses);
    const expensesAtCategory = getResultsByCategory(expenses);
    const oneData = expensesAtCategory(1);
    const twoData = expensesAtCategory(2);
    const threeData = expensesAtCategory(3);
    const FourData = expensesAtCategory(4);
    const FiveData = expensesAtCategory(5);
    const SixData = expensesAtCategory(6);

    var myPieChart = new Chart(ctxP, {
        type: 'pie',
        data: {
            labels: ["Travel", "Food&Drink", "Transportation", "Services", "Misc", "Health"],
            datasets: [{
                data: [
                    getCategorySum(oneData),
                    getCategorySum(twoData),
                    getCategorySum(threeData),
                    getCategorySum(FourData),
                    getCategorySum(FiveData),
                    getCategorySum(SixData),

                ],
                backgroundColor: ["#00ff00", "#ffa500", "#0000ff", "#6a0dad", "#ffff00", "#ff0000"],
                hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"]
            }]
        },
        options: {
            responsive: true
        }
    });
})


const getResultsByCategory = e => n => e.filter(ex => ex.category == n);
const getCategorySum = a => a.reduce((a, i) => a + Number(i.amount), 0);

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