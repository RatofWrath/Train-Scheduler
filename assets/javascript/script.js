var trainName = "";
var destination = "";
var firstTrain = "00:00";
var frequency = 1;
var nextArrival = "";
var minutesAway = 1;

$("#newTrain").on("click", function(){
    //taking the user's input and turning it into variables.
    var trainName = document.getElementById("tName").value.trim();
    var destination = document.getElementById("destination").value.trim();
    var firstTrain = document.getElementById("time").value.trim();
    var frequency = document.getElementById("frequency").value.trim();


    var firstTrainConverted = moment(firstTrain, "HH:mm")
    var diffTime = moment().diff(moment(firstTrainConverted), "minutes");
    var remainder = diffTime % frequency;
    var minutesUntilNextTrain = frequency - remainder;
    var nextTrain = moment().add(minutesUntilNextTrain, "minutes");
    var nextTrainConverted = moment(nextTrain).format("HH:mm");

    //Creating a new entry and appending it to our table
    var newTrainRow = $("<tr> <td> " + trainName + "</td> <td>" + destination + "</td> <td> " 
    + frequency + "</td> <td> " + nextTrainConverted + " </td> <td> " + minutesUntilNextTrain
     + " </td> </tr>");

    $("#scheduleTable").append(newTrainRow);
})