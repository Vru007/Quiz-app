const express=require('express');

const app=express();


/* Routes */

app.get('/', (req, res) => {
try{
     res.json("Get Request")
     
}
catch(err){
    res.json(err);
}
})

app.listen(8000,()=>{
    console.log("Server is running on port 8000");
})