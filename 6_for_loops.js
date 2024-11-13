const prompt=require('prompt-sync')();
let num=prompt("enter number : ");
num=Number.parseInt(num);
let sum=0;
for(let i=1;i<=num;i++){
  sum+=i;
}
console.log("sum is : ",sum);

//for in loop//

console.log("for in loop: ");
let obj={
    name:"manjeet",
    Class:"10th",
}
for (let a in obj){
    console.log(a);
}
for(let i in obj){
    console.log(i+":"+obj[i]);
}

   // for of loop //
console.log("for of loop : ");
for (let b of "manjeet"){
    console.log(b);
}