//bar
var ctxB = document.getElementById("barChart").getContext('2d');
$.get('/expenses').then(expenses => {
    console.log(expenses)
    const expensesAtCategory = getResultsByCategory(expenses);
    const oneData = expensesAtCategory(1);
    const twoData = expensesAtCategory(2);
    const threeData = expensesAtCategory(3);
    const FourData = expensesAtCategory(4);
    const FiveData = expensesAtCategory(5);
    const SixData = expensesAtCategory(6);
    var myBarChart = new Chart(ctxB, {
        type: 'bar',
        data: {
            labels: ["Travel", "Food&Drink", "Transportation", "Services", "Misc", "Health"],
            datasets: [{
                label: 'Cost',
                data: [
                    getCategorySum(oneData),
                    getCategorySum(twoData),
                    getCategorySum(threeData),
                    getCategorySum(FourData),
                    getCategorySum(FiveData),
                    getCategorySum(SixData),
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    const category = location.href.match(/(?:MoreCatInfo)(\d)/g);
    console.log(location)
    console.log(category)
    expenses.filter(e => e.category == 1).map(e => $('#tableDetails').append(tableRowFrom(e)))


})


const getResultsByCategory = e => n => e.filter(ex => ex.category == n);
const getCategorySum = a => a.reduce((a, i) => a + Number(i.amount), 0);

const tableRowFrom = e => `<tr>
<th scope="row">${e.id}</th>
<td>${e.desc}</td>
<td>$${e.amount}</td>
</tr>`