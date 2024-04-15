// Write your solution in this file!

// Task 1: Declare a variable called customerName in global scope
var customerName = 'bob';

// Task 2: Write a function to uppercase the customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase(); // Modify the existing variable
}

// Task 3: Write a function to set the bestCustomer variable in global scope
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// Task 4: Write a function to overwrite the bestCustomer variable
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Task 5: Declare a constant called leastFavoriteCustomer in global scope
const leastFavoriteCustomer = 'someone';

// Task 6: Write a function to attempt changing the leastFavoriteCustomer constant
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'someone else'; // This will throw an error
}
