const newExpense = {};

const queryURL = ''

//Set up click listener
$(".btn-cat").click(function() {
    //alert($(this).attr("data-cat"))
    //alert($(this).text())
    newExpense.category = parseInt($(this).attr("data-cat"));
    //console.log(newExpense);
    $("#exampleModalLabel").text($(this).text());


});

$(".AddBtn").click(function() {
    $.post('/addExpenses', {

    }).then(function(response) {
        console.log(response)
    })
});