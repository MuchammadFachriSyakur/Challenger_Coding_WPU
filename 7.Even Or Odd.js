function evenOrOdd(number) {
  let result = " ";
  if(number % 2 == 0){
    result = "Even";
  }else{
    result = "Odd";
  }
  return result;
}

console.log(evenOrOdd(6));