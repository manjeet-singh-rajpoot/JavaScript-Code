const a=/very/g
const b="manjeet is very very important boy"
console.log(b.replace(a,"globaly"));

function myfun(){
    let str="visit geeksforgeeks";
    let n=str.search(/geeksforgeeks/);

    console.log(n);

    let n1=str.search(/geeksforgeeks/);

    console.log(n1);


}
myfun();

const c=/manjeet/m;
const t="manjeet singh rajpoot"
console.log(t.match(c));
