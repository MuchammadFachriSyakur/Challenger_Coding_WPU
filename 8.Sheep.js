function sheep(num){
  let result = ' ';
  for(let i = 1; i <= num; i++){
    result += `${i} sheep...`;
  }
  return result;
}
console.log(sheep(8));