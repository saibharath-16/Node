const http=require("http");
const fs=require("fs")
const url=require("url")

const myServer=http.createServer((req,res)=>{
    const log=`${req.method} ${req.url} New Req Received \n`
    // console.log(` New Request Received from user \n`);
    const myUrl=url.parse(req.url,true)
    console.log(myUrl)
    // res.write("hello user")
    // res.end("Hello Message from server")
    fs.appendFile("./log.txt",log,(err,data)=>{

        switch(myUrl.pathname){
            case "/" :
                res.end("Home Page");
            break
            
            case "/about" :
                const username=myUrl.query.myname;    
                res.end(`Hi, ${username}`)
            break

            case "/search":
                const search=myUrl.query.search_query;
                res.end("You have searched for "+ search);    

            default:res.end("404 Page not found")
        }
        
    })
});
myServer.listen(2000,()=>{
    console.log("Server is Running");
})

// if we want to change anything . then we need to restart the server to see the results