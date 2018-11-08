var totalCost = 0;

var cost= [];
var foodChoices = [];
//var order=  [];

var add = document.getElementById("add");
add.onclick = function() {
	
	foodChoices.push ("Almond Chicken ");
	cost.push(3.0);
	console.log(foodChoices + "$" + cost);
}

var add2 = document.getElementById("add2");
add2.onclick = function() {
	foodChoices.push ("Chicken Fried Rice ");
	cost.push(5.50);
	console.log(foodChoices + "$" + cost);
}

var add3 = document.getElementById("add3");
add3.onclick = function() {
	foodChoices.push ("Egg Rolls ");
	cost.push(1.50);
	console.log(foodChoices + "$" + cost);
	}


var add4 = document.getElementById("add4");
add4.onclick = function() {
	foodChoices.push ("Soft Drink ");
	cost.push(2.00);
	console.log(foodChoices + "$" + cost);
	}

var add5 = document.getElementById("add5");
add5.onclick = function() {
for (var i=0; i<cost.length; i++){
	console.log (foodChoices[i] + cost[i]);
	
	totalCost += cost [i]; 
	
} console.log(totalCost);
//console.log(cost[i]);
}
