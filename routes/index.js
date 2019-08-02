let express=require("express");
let router=express.Router();
router.get("/",function(req,res){
    res.sendFile("index.html",{root:__dirname + '/',});
})

module.exports=router;