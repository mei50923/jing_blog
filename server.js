let express=require("express");
let app=express();
let index=require("./routes/index");
let user=require("./routes/user");
let article=require("./routes/article");

//ejs模板
app.engine('html',require("ejs").renderFile);

app.use("/",index);
app.use("/user",user);
app.use("/article",article);
app.listen(8080,()=>console.log("8080 success"));