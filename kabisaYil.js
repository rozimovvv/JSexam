function findKabisaYear(year) {
  if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
    alert(year + " is a kabisa year");
  } else {
    alert(year + " is not a kabisa year");
  }
}

// take input
const year = prompt("Enter a year:");

findKabisaYear(year);
