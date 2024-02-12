function points(goal){
  let result = 0;
  for(let i = 0; i < goal.length;i++){
    if(Number(goal[i][0]) > Number(goal[i][2])){
      result += 3;
    }else if(Number(goal[i][0]) > Number(goal[i][2])){
      result += 1;
    }else{
      result += 0;
    }
  }
  return result;
}

console.log(points(['1:0','2:4']));