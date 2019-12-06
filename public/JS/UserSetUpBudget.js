const newExpense = {};

//Set up click listener
$(".btn-cat").click(function() {
    //alert($(this).attr("data-cat"))
    //alert($(this).text())
    newExpense.category = parseInt($(this).attr("data-cat"));
    //console.log(newExpense);
    $("#exampleModalLabel").text($(this).text());


});

$(".AddBtn").click(function(event) {
    event.preventDefault();
    newExpense.desc = $("#desc").val();
    newExpense.amount = parseFloat($("#amount").val());
    $.ajax({
        url: "/addExpenses",
        method: "POST",
        data: newExpense
    }).then(function(response) {
        console.log(response)
            //     //Close modal here
        $('#CatModal').modal('hide');
        // console.log("Finished")


    })
});