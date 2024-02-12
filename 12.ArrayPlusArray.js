function arrayPlus(arr1,arr2){
  let result = 0;
  for(let i = 0; i < arr1.length; i++){
    result += arr1[i];
  }
  for(let i = 0; i < arr2.length; i++){
    result += arr2[i];
  }
  return result;
}

console.log(arrayPlus([10,4,5],[5,3,2]));