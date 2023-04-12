const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try{

  }catch(e){
    
  }
  934ad999-3bae-4009-b753-81f276aac549
  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);