// Write your solution in this file!
var customerName = 'bob';
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
  }
  function setBestCustomer() {
    bestCustomer = 'not bob';
  }
  function overwriteBestCustomer() {
    bestCustomer = 'new best customer';
  }
  const leastFavoriteCustomer = 'someone';

function changeLeastFavoriteCustomer() {
  // Trying to change a constant will result in an error
  leastFavoriteCustomer = 'new least favorite';
}
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
  }
  