function backToHome(jarak,literPerJarak, bensin){
  return bensin * literPerJarak <= jarak;
}
console.log(backToHome(100,25,1));