//Преобразование типов

function main() {
  let a = "" + 1 + 0  // '10' (сложение со сторокой)
  let b = "" - 1 + 0  // -1 (работа с числами)
  let c =  true + false  // 1 + 0 = 1
  let d = 6 / "3" // 2
  let e = "2" * "3" //  6
  let j = 4 + 5 + "px" // '9px' (сложение со строкой)
  let s = "$" + 4 + 5 // '$45' 
  let x = "4" - 2 // 2
  let w = "4px" - 2 // NaN
  let o = "  -9  " + 5 // ' -9 5' (сложение преобразует число 5 в строку)
  let q = "  -9  " - 5 //  -14 (вычитание всегда делает преобразование к числу, поэтому '-9' станоситься числом)
  let r = null + 1  // 0 + 1 = 1
  let t = undefined + 1 //  NaN (undefined становиться NaN после численного преобразования)
  let i = " \t \n" - 2 // -2 (пробельные символы игнорируются, строка становиться аналогичной пустой строке) 

  console.log('a=', a)
  console.log('b=', b)
  console.log('c=', c)
  console.log('d=', d)
  console.log('e=', e)
  console.log('j=', j)
  console.log('s=', s)
  console.log('x=', x)
  console.log('w=', w)
  console.log('o=', o)
  console.log('r=', r)
  console.log('t=', t)
  console.log('i=', i)
}

main() 
