// Mengikuti Challenger Coding WPU
// 2/360
const reverseSEQ = function(n){
  const result = [];
  for(let i = n; i >= 1; i--){
    result.push(i);
  }
  return result;
};

console.log(reverseSEQ(10));