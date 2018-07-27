// var degrees = 45
// var el = document.getElementById("myElement");
// el.style.transform = "rotate(" + degrees + "deg)";
// secondRotation(0); // returns 0
// secondRotation(59); // returns (59 / 60) * 360
// hourRotation(12); // returns 0
// hourRotation(5); // returns (5 / 12) * 360

const secondBar = document.getElementById('second');
const minuteBar = document.getElementById('minute');
const hourBar = document.getElementById('hour');


setInterval(function(){
    console.log("TICK!");
    var now = new Date();

	var seconds = now.getSeconds();
	var secondsDegrees = ((seconds / 60)*360);
	secondBar.style.transform = "rotate("+ secondsDegrees + "deg)";

	var minutes = now.getMinutes();
	var minutesDegrees = ((minutes / 60)*360);
	minuteBar.style.transform = "rotate("+ minutesDegrees + "deg)";

	var hours = now.getHours();
	var hoursDegrees = ((hours / 12)*360);
	hourBar.style.transform = "rotate("+ hoursDegrees + "deg)";

	console.log(seconds);
	//console.log(secondsDegrees);
 }, 1000);     


// var now = new Date();
// var seconds = now.getSeconds();
// var secondsDegrees = ((seconds / 60)*360);
// console.log(secondsDegrees);
//secondbar.style.transform = 'rotate(${secondsDegrees}deg)';
