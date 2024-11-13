let obj=[90,87,85,20];
console.log("first access element: ",obj[0]);
console.log("Arrays: ",obj);
obj[0]=95;
console.log("after change: ",obj);
console.log("first element: ",obj[0]);

      //Methods in Array//
let r=obj.toString();
console.log(r);

obj.join("and");
console.log("after join: ",obj);

let r1=obj.pop();
console.log("after pop: ",obj,r1);

let r2=obj.push(98);
console.log("push: ",obj,r2);

let r3=obj.shift();
console.log("remove first element: ",obj);

let r4=obj.unshift(30);
console.log("added first elemet:",obj,r4);

//delete obj[0];
//console.log("after delete: ",obj);

console.log("length: ",obj.length);

let obj2=[20,30,40,50];
let obj3=[70,60,48,39];
let arr=obj.concat(obj2,obj3);
console.log("new array: ",arr);

obj.sort();
console.log("after sorting: ",obj);

obj.reverse();
console.log("reverse: ",obj);

obj.splice(2,3,67,49,59);
console.log("splice : ",obj);

obj.slice(2);
console.log("slicing: ",obj);

obj.slice(1,3);
console.log("slice2: ",obj);

//loops in array //

let name="manjeet";
let arr2=Array.from(name);
console.log("array.from: ",arr2);

obj.forEach((element) =>{
        console.log("square: ",element*element);
});

console.log("for of loop: ");
for(let i of obj){
    console.log(i);
}

console.log("for in loops: ");
for(let i in obj){
    console.log(i);
}

console.log("map function : ");
let array=[20,39,48];
let l=array.map((value,index,array)=>{
    console.log(value,index,array);
    return value+1;
})
console.log("new arr: ",l);


let s=array.filter((a)=>{
       return a<60
});
console.log("filter function: ",s);

let q=array.reduce((h1,h2)=>{
        return h1+h2;
})
console.log("reduce: ",q);





