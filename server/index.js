const express = require("express")
const bodyParser = require("body-parser")
const app = express();
const controller = require("./controller.js")
const axios = require("axios")
app.use(bodyParser.json())

app.get("/api/businesses", controller.read)
app.post("/api/businesses", controller.create)
app.delete(`/api/businesses/:id`,controller.delete)
app.put("/api/businesses",controller.update)


headers={
    headers:{
        "Authorization":"Bearer o3I9sofO3JIwBIsedAXnLZYU5hlPhUY-IVO83__-8cSnSMFvzE5ZAti5wpySw4RT2fzZUCGpoB68o0U7Oy5rlJDZV9pNLVLOpGO-5f_SiUH9PmvXPhS-hh592VpLXHYx"
    }
}

app.get("/api/YelpInfo", (req,res) => {
    axios.get("https://api.yelp.com/v3/businesses/search?location=Phoenix,Arizona", headers).then(response =>{
        res.status(200).json(response.data.buisnessess)
    })
})



const port = 4000;

app.listen(port, ()=>console.log(`Listening on port ${port}`))