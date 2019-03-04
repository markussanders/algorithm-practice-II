// Write a function called oddball_sum which takes in a list of numbers and returns the sum of all the odd elements.

function oddballSum(nums) {
    return nums.filter(num => num % 2 > 0)
    .reduce((a, b) => (a + b), 0);
}
