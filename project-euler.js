function openProblem(number) {
	switch (number) {
		case 1:
		document.getElementById("problem1").style.display = "block";
		document.getElementById("problem2").style.display = "none";
		document.getElementById("problem3").style.display = "none";
		break;
		case 2:
		document.getElementById("problem1").style.display = "none";
		document.getElementById("problem2").style.display = "block";
		document.getElementById("problem3").style.display = "none";
		break;
		case 3:
		document.getElementById("problem1").style.display = "none";
		document.getElementById("problem2").style.display = "none";
		document.getElementById("problem3").style.display = "block";
		break;
		default:
		document.getElementById("problem1").style.display = "none";
		document.getElementById("problem2").style.display = "none";
		document.getElementById("problem3").style.display = "none";
	}
	document.getElementById("problem").style.display = "none";
}

function solveProblem(number) {
	var oldScr = document.getElementById("problemScript");
	var newScr = document.createElement("script");
	
	if (oldScr) {
		oldScr.parentNode.removeChild(oldScr);
	}
	
	newScr.id = "problemScript";	
	var resID, time;
	
	switch (number) {
		case 1:
		code = document.getElementById("probcode1").value + " function solve() { return " + document.getElementById("func1").value + " }";
		resID = "res1";
		time = "time1";
		break;
		case 2:
		code = document.getElementById("probcode2").value + " function solve() { return " + document.getElementById("func2").value + " }";
		resID = "res2";
		time = "time2";
		break;
		default:
		code = document.getElementById("probcode3").value + " function solve() { return " + document.getElementById("func3").value + " }";
		resID = "res3";
		time = "time3";
	}
	newScr.text = code;
	document.body.appendChild(newScr);
	var start = new Date().getTime();
	document.getElementById(resID).innerHTML = solve();
	document.getElementById(time).innerHTML = new Date().getTime() - start + " ms";
}