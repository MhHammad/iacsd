var express = require("express")
var app = express();

app.get('/',(req,res)=>{

    res.send(
        "<h1>Welcome to IACSD</h1>"
    )
})

var server=app.listen(9000);
console.log("server running on port 9000")