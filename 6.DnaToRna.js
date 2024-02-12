function dnaToRna(dna){
  let rna = " ";
  for(let i = 0; i < dna.length; i++){
    const result = dna[i] == 'T' ? rna += "U" : rna += dna[i];
  }
  return rna;
}
console.log(dnaToRna("GCAT"));