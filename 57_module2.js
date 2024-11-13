                     //1 st way //
// const obj=require("./module1");
// obj.x();
// obj.y("Garima");
// obj.y("Shivani");

//                     //2 nd way using Destructuring//
// const {x,y}=require("./module1");
// x();
// y("Raj");  

                   //ES6 Module //
import z,{x,y} from "./module1.js"

x();
y("manjeet");
z();
