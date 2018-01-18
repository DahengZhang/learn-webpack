const page = 'a';
if (page === 'a')
   import('./common.a').then(comA => {
      console.log("comA", comA)
   })
else
   import('./common.b').then(comB => {
      console.log("comB", comB)
   })

let arr = [1, 2, 3, 4];
let arrB = arr.map(item => {
   item * 2;
});

arr.includes(8);

console.log(new Set(arrB));

function* func() { }
