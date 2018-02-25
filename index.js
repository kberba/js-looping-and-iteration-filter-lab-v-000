// Code your solution in this file

function findMatching(drivers, string) {
  let matchDriverList = [];
  for (const d of drivers) {
    if (d.toUpperCase() === string.toUpperCase()) {
      matchDriverList.push(d);
    }
  }
  return matchDriverList;
}

function fuzzyMatch(drivers, string) {
  let matchDriverList = [];
  for (const d of drivers) {
    if (d.substring(0, 2) === string.substring(0, 2)) {
      matchDriverList.push(d);
    }
  }
  return matchDriverList;
}


function matchName(drivers, string) {
  let matchDriverName = [];
  for (const d of drivers) {
    if (d === string) {
      matchDriverName.push(d);
    }
  }
  return matchDriverName;
}
