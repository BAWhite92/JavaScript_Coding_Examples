function largestOfFour(arr) {
  //first map arr to a new array (map function creates a new array populated with results of calling a function on every element in calling array)
  return arr.map(group =>
    /*group is arr, the function being called on each element in the array (group) is .reduce, prev is the accumulator, current is
    the number in the array (group) that is currently being iterated over*/
    group.reduce((prev, current) =>
    /*In this case for reduce we are reducing down to the highest number in the provided array so using the conditional(ternary) operator
    we can check if current is greater than the previous value (which was passed back by the previous call) and if it is the return current,
    if it isn't continue returning previous. ternary operator takes 3 arguements which is a question, the true return and the false return
    it is basically replacing an if-else statement with 1 neat expression*/
      current > prev ? current : prev
    )
  )
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
