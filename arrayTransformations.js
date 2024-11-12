//fUNCTION TO DOUBLE THE ELEMENTS IN THE ARRAY
const double = arr => {
    let newArr = [];
  
    arr.forEach(element => {
      element = element * 2;
      newArr.push(element);
    });
  
    return newArr;
  };
  
  //THIS FUNCTION RETURNS THE EVEN NUMBERS OF THE GIVEN ARRAY
  
  const filterEven = arr => {
    let newArr = [];
    arr.forEach(element => {
      if (element % 2 === 0) {
        newArr.push(element);
      }
    });
  
    return newArr;
  };
  
  // A FUNCTION SUM ALL ELEMENT IN A GIVEN ARRAY
  function sum(arr) {
    let sum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  
    return sum;
  }
  
  
  // AND THIS FUNCTION FINDS THE AVERAGE OF THE ARRAY GIVEN
  function average(arr) {
    return sum(arr) / arr.length;
  }
  
  
  // calling functions and passing arguments to them while logging
  console.log("----------------------------------");
  
  console.log(
    `Doubles of Array element : ${double([
      20,
      35,
      34,
      67,
      89,
      90,
      93,
      21,
      45,
      67,
      78
    ])}`
  );
  
  console.log(
    `Filtered even numbers : ${filterEven([
      20,
      35,
      34,
      67,
      89,
      90,
      93,
      21,
      45,
      67,
      78
    ])}`
  );
  
  console.log(
    `Sum of Array elements : ${sum([20, 35, 34, 67, 89, 90, 93, 21, 45, 67, 78])}`
  );
  console.log(
    `Average of Array elements : ${average([
      20,
      35,
      34,
      67,
      89,
      90,
      93,
      21,
      45,
      67,
      78
    ])}`
  );
  
  console.log("----------------------------------");
  
  
  // COMPOSE FUNCTION
  
  function compose(...fns) {
    return function(arg) {
      return fns.reduceRight((acc, fn) => fn(acc), arg);
    };
  }
  
  const composedfunc = compose(sum, double, filterEven);
  
  console.log(composedfunc([20, 35, 34, 67, 89, 90, 93, 21, 45, 67, 78]));
  