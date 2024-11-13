                   
y="geeks"+"for"+"geeks";
console.log(y);
let a=20;
let b=10;
console.log("a-b",a-b);
console.log("a*b",a*b);
console.log("a/b",a/b);
console.log("a**b",a**b);
console.log("a+=b",a+=b);
console.log("a-=b",a-=b);
console.log("a*=b",a*=b);
console.log("a%b",a%b);
console.log("a**b",a**b);
console.log("a|b",a|b);
console.log("a==b",a==b);
console.log("a===b",a===b);
console.log("a!=b",a!=b);
console.log("a!==b",a!==b);
console.log("a>b",a>b);
console.log("a<b",a<b);
console.log("a>=b",a>=b);
console.log("a<=b",a<=b);
console.log("a&&b",a&&b);
console.log("a||b",a||b);
console.log("!(a||b)",!(a||b));
console.log("a|b",a|b);
console.log("a^b",a^b);
console.log("~a",~a);
console.log("<<",a<<b);
console.log(">>",a>>b);
console.log("unary ",typeof(y));
console.log("Delete y: ",delete(y));

function *fun(){
    yield 1;
    yield 2;
    yield 3;
    yield "geeks";
}
a="";

for(let i of fun()){
    a=a+i;
}
console.log("function: ",a);

