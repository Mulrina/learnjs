//Результат присваивания

function main() {
  let a = 2;
  let x = 1 + (a *= 2); // сначала команда a *= 2, рез.: a = 4, а затем x = 1 + a, где  рез. x = 5.
  
  console.log('a=', a)
  console.log('x=', x)   
} 

main() 
