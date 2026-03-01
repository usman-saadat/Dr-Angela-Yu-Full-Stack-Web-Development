import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    // console.log(req.rawHeaders);
    res.send("<h1>Home</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>About Me</h1><p>My Name is Usman</p>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact</h1><p>My contact: +92 336 4105011</p>");
});

app.post("/register", (req, res) => {
    res.sendStatus(201);
});

app.put("/user/usman", (req, res) => {
    res.sendStatus(200);
});

app.patch("/user/usman", (req, res) => {
    res.sendStatus(201);
});

app.delete("/user/usman", (req, res) => {
    res.sendStatus(201);
});

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});

