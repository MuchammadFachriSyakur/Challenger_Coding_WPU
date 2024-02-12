const min = function(num){
  let result = num[0];
  for(let i = 1; i < num.length; i++){
    if(result > num[i]){
      result = num[i];
    }
  }
  return result;
};

console.log(min([1,5,7,9,10,8]));

const max = function(num){
  let result = num[0];
  for(let i = 1; i < num.length; i++){
    if(result < num[i]){
      result = num[i];
    }
  }
  return result;
};
console.log(max([1,5,7,9,10,8]));