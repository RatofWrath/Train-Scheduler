// Initialize Firebase
var config = {
    apiKey: "AIzaSyB3JiKuB4iSnD1kSc9s5SCQJ8qMQpnewpI",
    authDomain: "bootcamptrainproject.firebaseapp.com",
    databaseURL: "https://bootcamptrainproject.firebaseio.com",
    projectId: "bootcamptrainproject",
    storageBucket: "bootcamptrainproject.appspot.com",
    messagingSenderId: "392604858604"
  };
  firebase.initializeApp(config);

var database = firebase.database();

var trainName = "";
var destination = "";
var firstTrain = "00:00";
var frequency = 1;
var nextArrival = "";
var minutesAway = 1;

$("#newTrain").on("click", function(){
    //taking the user's input and turning it into variables.
    event.preventDefault();
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

    //push to the database.

    var newTrain = {
        trainName: trainName,
        destination: destination,
        frequency: frequency,
        nextArrival: nextTrainConverted,
        minutesAway: minutesUntilNextTrain,
    };

    database.ref().push(newTrain);
    })

    database.ref().on("child_added", function(childSnapshot, prevChildKey) {
        var sv = childSnapshot.val();
        console.log(sv);
        


        var newTrainRow = $("<tr> <td> " + sv.trainName + "</td> <td>" + sv.destination + "</td> <td> " 
        + sv.frequency + "</td> <td> " + sv.nextArrival + " </td> <td> " + sv.minutesAway
         + " </td> </tr>");

         //$("#scheduleTable").clear();
        $("#scheduleTable").append(newTrainRow);
})