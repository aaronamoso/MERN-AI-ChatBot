import express from 'express';
const app = express();
// GET - get/retrieve data from db or user
// PUT - update/modify/create data
// POST - request data
// DELETE - delete data
//make a new request
app.get("/he", (req, res, next) => {
    //req-when client or user request something
    //res-send back a response
    //next-move onto the next middleware
    return res.send("Hello");
});
app.listen(5000, () => console.log("Server Open"));
//# sourceMappingURL=index.js.map