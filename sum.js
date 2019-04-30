// Write a node program that takes in an unlimited number of
// command line arguments, goes through each and prints out
// the sum of them.If any argument is not a whole number,
// skip it.Do support negative numbers though.
// If any argument is not a number, output an error message.
// We need at least 2 arguments.

// - Get the command-line arguments

// Remove the first 2 elements from process.argv
// shift?
// Start i = 2
// slice?

function getArguments() {
  return process.argv.slice(2);
}

// Converting arguments to numbers
// - parseInt
// - Number

function validateArgs(list) {
  if (list.length < 2) {
    console.log('Please provide at least 2 numbers');
    process.exit();
  }

  for (var i = 0; i < list.length; i++) {
    if (isNaN(list[i])) {
      console.log('Please input only numbers');
      process.exit();
    }
    return list;
  }
}

function validateAllInt(numbers) {
  // Loop through the numbers
  // if its an integer, add it to the output

  var outputArr = [];
  for (var i = 0; i < numbers.length; i++) {
    // check if its an integer
    if (numbers[i] % 1 === 0) {
      outputArr.push(numbers[i]);
    }
  }

  return outputArr;
}

function convertToNumbers(list) {
  var outputList = [];
  for (var i = 0; i < list.length; i++) {
    outputList.push(Number(list[i]));
    if (isNaN(outputList[i])) {
      console.log('Please input only numbers');
      process.exit();
    } else if (list.length < 2) {
      console.log('Please provide at least 2 numbers');
      process.exit();
    }
  }

  return outputList;
}

// - Loop over each of the command line arguments

function sum(numbers) {
  var total = 0;
  for (var i = 0; i < numbers.length; i++) {
    // - Add each argument to a total

    total += numbers[i];
  }

  return total;
  14;
}
// ['3','5'','6']

// var arguments = getArguments();
// var convertedNumbers = convertToNumbers(arguments);
// var validatedNumbers = validateArgs(convertedNumbers);
// var onlyInt = validateAllInt(validatedNumbers);
// console.log(onlyInt);
// var result = sum(onlyInt); //[3,5,6]
// console.log(result);

// fonction composition
var result = sum(
  validateAllInt(validateArgs(convertToNumbers(getArguments())))
);
console.log;
