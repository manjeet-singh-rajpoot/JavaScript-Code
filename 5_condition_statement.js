let i=0;
do{
let input=prompt("enter age: ");
input=Number.parseInt(input);
if(input<0){
    alert("invalid age ");
}else if(input<9){
    console.log("not drive");
}else if(input<9 && input>18){
    alert("Not drive");
}else{
    alert("you can drive");
}
i++;
}while(i<10);