////////////////////////////////////////
// CONNECTION
////////////////////////////////////////
const connection = new Connection(

    "BeatMatchingProject",
    "player",
    "https://textogether.herokuapp.com/"

);



connection.onConnect(() => {
    console.log("CONNECTED");

});

connection.onDisconnect(() => {
    console.log("DISCONNECTED");
});

connection.onError(err => {
    console.error("CONNECTION ERROR:", err);
});

connection.onOtherConnect((id, type) => {
    console.log(`OTHER CONNECTED: ${id}, ${type}`);
});

connection.onOtherDisconnect((id, type) => {
    console.log(`OTHER DISCONNECTED: ${id}, ${type}`);
});

var success_string = "Secret Sent";

function SendText() {
    var content = document.getElementById("myText").value;
    connection.send("snare-send", content);
    console.log(content);
    document.getElementById('myText').value = '';
    success_string = success_string.concat("!");
    document.getElementById('success').innerHTML = success_string;
}


// var trigger;
//
// // Periodically check the position and fire
// // if the change is greater than the sensitivity
// setInterval(function() {
//     var change = Math.abs(x1 - x2 + y1 - y2 + z1 - z2);
//
//
//     if (change > sensitivity && trigger) {
//         // var x = document.getElementById("kick-single");
//         // x.play();
//         trigger = false;
//         if (instrumenttype) {
//             document.body.style.backgroundColor = "white";
//             connection.send("snare-send", change);
//
//         } else {
//             document.body.style.backgroundColor = "yellow";
//             connection.send("kick-send");
//         }
//     } else if (change < sensitivity) {
//         document.body.style.backgroundColor = "black";
//         //connection.send("no-beat");
//         trigger = true;
//
//     }
//     // Update new position
//     x2 = x1;
//     y2 = y1;
//     z2 = z1;
// }, 150);