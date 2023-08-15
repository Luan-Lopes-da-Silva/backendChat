const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

const port = process.env.PORT || 3001


app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try{
    const r = await axios.put(
    "https://api.chatengine.io/users/",
    {username:username, secret: username, first_name:username},
    {headers:{"Private-Key":`${process.env.VITE_CHAT_ENGINE_PROJECT_ID}`}}  
    )
    return res.status(r.status).json(r.data)
  }catch(e){
    return res.status(e.response.status).json(e.response.data)
  }
});

app.listen(port);