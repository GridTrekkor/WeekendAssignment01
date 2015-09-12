var claim1 = {
	patientName: "John Doe",
	visitType: "Specialist",
	visitCost: 1100
};

var claim2 = {
	patientName: "Jane Doe",
	visitType: "Optical",
	visitCost: 100
};

var claim3 = {
	patientName: "Joe Johnson",
	visitType: "Emergency",
	visitCost: 31000
};

var claim4 = {
	patientName: "Sharon Smith",
	visitType: "Emergency",
	visitCost: 1300
};

var claim5 = {
	patientName: "Steve Wright",
	visitType: "Primary Care",
	visitCost: 770
};

var initialList = [claim1, claim2, claim3, claim4, claim5];

var totalPaidOut = 0;

function claim(name, type, cost){
	this.patientName = name;
	this.visitType = type;
	this.visitCost = cost;
}

// add add'l patient objects to the array
initialList.push(new claim("Jackie McLean", "Primary Care", 1024));
initialList.push(new claim("Andrew Hill", "Emergency", 2048));
initialList.push(new claim("Kenny Burrell", "Optical", 4096));
initialList.push(new claim("Wayne Shorter", "Primary Care", 8192));
initialList.push(new claim("Eric Dolphy", "Specialist", 16384));

// function to determine percent covered
var PercentCovered;

var CalcPercentCovered = function(visitType) {
	switch(visitType) {
		case "Specialist":
			PercentCovered = 0.1;
			break;
		case "Optical":
			PercentCovered = 0;
			break;
		case "Emergency":
			PercentCovered = 1;
			break;
		case "Primary Care":
			PercentCovered = 0.5;
			break;
	}
	return PercentCovered;
}

// create empty table
var body = document.body;
var Table = document.createElement("table");
Table.setAttribute("border", "1");
Table.setAttribute("cellspacing", "0");
Table.setAttribute("cellpadding", "5");

var i = 0;
var Payout;
var TR;
var TD;

// function to determine amount covered
// calculate payout and populate table
function CalcPayout() {
	while (initialList[i]) {
		TR = Table.insertRow();
		totalPaidOut = initialList[i].visitCost * CalcPercentCovered(initialList[i].visitType);
		Payout = ("Paid out $" + Math.round(totalPaidOut) + " for " + initialList[i].patientName);
		TD = TR.insertCell();
		TD.appendChild(document.createTextNode(Payout));
		TD.style.font = "bold 14px/16px 'Courier New'";
		TD.style.color = "#000075";
		TD.style.border = "1px solid #800";
		i++;
	}
    body.appendChild(Table);
}

CalcPayout();