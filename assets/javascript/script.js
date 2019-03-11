var trainName = "";
var destination = "";
var frequency = 1;
var nextArrival = "";
var minutesAway = 1;

$("#newTrain").on("click", function(){
    var trainName = document.getElementById("tName").value.trim();
    var destination = document.getElementById("destination").value.trim();
    var frequency = document.getElementById("time").value.trim();
    var minutesAway = document.getElementById("frequency").value.trim();

})