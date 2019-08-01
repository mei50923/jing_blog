let express=require("express");
let router=express.Router();
router.get("/signin",(req,res)=>{
      res.send("用户登陆");
});
router.get("/signup",(req,res)=>{
    res.send("用户注册");
});
router.get("/signout",(req,res)=>{
    res.send("用户退出");
});
module.exports=router;