const express = require("express")
const app = express();

const serverBlog = require("./controllers/routes");
const Port = 4000;


app.use(express.json());
app.use("/serverBlog", serverBlog);


app.get('/test', (req, res) => {
    res.send('Hello World!')
});



app.listen(Port,()=>{
    console.log("Server is running on port", Port);
});