var arrayAtticus = ["Atticus", "2405", "47000", 3];
var arrayJem = ["Jem", "62347", "63500", 4];
var arrayBoo = ["Boo", "11435", "54000", 3];
var arrayScout = ["Scout", "6243", "74750", 5];

// constructor function to change the individual employee array to an object
function Person(employeeArray) {
  this.name = employeeArray[0];
  this.idNum = employeeArray[1];
  this.salary = employeeArray[2];
  this.rating = employeeArray[3];
}

var atticus = new Person(arrayAtticus);
var jem = new Person(arrayJem);
var boo = new Person(arrayBoo);
var scout = new Person(arrayScout);

var employees = [atticus, jem, boo, scout];

for (var i = 0; i < employees.length; i++) {
  var report = employeeReport(employees[i]);
  console.log(report);
}

function employeeReport(employee) {
  var employeeName = employee.name;
  var employeeId = employee.idNum;
  var salary = parseInt(employee.salary);
  var rating = employee.rating;
  var bonus = 0;

  var output = [];

  output[0] = employeeName;

  // second index calcs bonus
  bonus = calcBonus(rating, employeeId, salary);
  output[1] = bonus;

  // third index is adj annual comp =  salary + bonus
  output[2] = salary + (bonus * salary);

  // fourth index is total bonus rounded to nearest dollar
  output[3] = Math.round(bonus * salary);

  return output;
}

function calcBonus(rating, id, salary) {
  var bonus = 0;

  //Those who have a rating of a 2 or below should not receive a bonus.
  //Those who have a rating of a 3 should receive a base bonus of 4% of their base annual income.
  //Those who have a rating of a 4 should receive a base bonus of 6% of their base annual income.
  //Those who have a rating of a 5 should receive a base bonus of 10% of their base annual income.
  switch (rating) {
    case 5:
      bonus = 0.1;
      break;
    case 4:
      bonus = 0.06;
      break;
    case 3:
      bonus = 0.04;
      break;
    default:
      bonus = 0;
  }

  //If they have 4 employee numbers, this means they have been with the company for longer than 15 years,
  //and should receive an additional 5%.
  if (id.length == 4) {
    bonus += 0.05;
  }

  //However, if their annual income is greater than $65,000, they should have their bonus adjusted down 1%.
  if (salary > 65000) {
    bonus -= 0.01;
  }
  //No bonus can be above 13% total.
  if (bonus > 0.13) {
    bonus = 0.13;
  }

  return bonus;
}
