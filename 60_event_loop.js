let m=()=>{
    setTimeout(() => {
             console.log("Hello manjeet....");
    }, 4000);
}
m();


// let fs=require('fs');
// const readstream=fs.createReadStreamReadStream("/.file.txt");
// console.log("Start");
// readstream.on("data",(chunk)=>{
//     console.log(chunk.toString());
// });
// console.log("End");

let set=()=>{
    setImmediate(()=>{
           console.log("Set immediate..");
    })
}
console.log("Ending loop");