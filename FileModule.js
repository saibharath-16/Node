const fs=require('fs');
const os=require("os");
//fs.writeFileSync("./text.txt", "This message is written using writeFileSync");

//fs.writeFile("./text.txt", "This message is written using writeFile", (err)=>{})//Async

//if we use both writeFileSync and writeFile then it will be overridden.

//let res=fs.readFileSync("./text.txt","ascii");
//console.log(res);

// fs.readFile("./text.txt","ascii",(err,res)=>{
//     if(err){console.log("Error ",err)}
//     else{
//         console.log(res);
//     }
// })//when we use Async , it is mandatory to use callBack func or else it will throw error  

//fs.appendFileSync("./text.txt",`This text is using appendFileSync ${Date.now()}`)

//fs.copyFileSync("./text.txt","./copy.txt");

//fs.unlinkSync("./copy.txt");//to delete file 

//console.log(fs.statSync("./text.txt"));//to see the statistics of the file

// console.log(os.platform());
// console.log(os.hostname());
// console.log(os.networkInterfaces());
// console.log(os.userInfo());
// console.log(os.type());
