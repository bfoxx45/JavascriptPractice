var x = 1984916519;

var show = "showNumber";

if(show == "showNumber"){
	document.getElementById("viewCounter").innerHTML = x;
}else if(show == "ShowNumber"){
	document.getElementById("viewCounter").innerHTML = "";
}else{
	document.getElementById("viewCounter").innerHTML = "If the third block runs";
	console.log("This appears in the console");
}
