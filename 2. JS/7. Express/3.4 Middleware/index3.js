import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

// creating middlewre
function logger(req, res, next){
  console.log("Request mehtod: ", req.method);
  console.log("Request URL: ", req.url);
  next();
}

//using app.use method to specify which middleware we want to use
app.use(logger);

// then we end up with route handlers
app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
