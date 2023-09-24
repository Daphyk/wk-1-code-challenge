//netSalary function 
function calculateNetSalary(basicSalary, benefits ) {

  const grossSalary = basicSalary + benefits;

  // Calculate the PAYE (Pay As You Earn) tax.
  const PAYE = grossSalary * 0.3;

  // Calculate the NHIF (National Hospital Insurance Fund) deduction.
  const NHIFDeduction = grossSalary * 0.05;

  const NSSFDeduction = grossSalary * 0.06;

  const netSalary = grossSalary - PAYE - NHIFDeduction - NSSFDeduction;

  const housinglevi =grossSalary - 0.15;

  return netSalary;
}


//function to get user input and calculate net salary
function getUserInputAndCalculateSalary() {
  const netSalary = calculateNetSalary(parseFloat(basicSalary), parseFloat(benefits));
}


// Print the net salary.
console.log("Net salary:", netSalary);

