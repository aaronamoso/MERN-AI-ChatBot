import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";
//make a new request
// app.get("/he", (req, res, next) => {
//   //req-when client or user request something
//   //res-send back a response
//   //next-move onto the next middleware
//   console.log(req.body.name);
// Connections and listeners
const PORT = process.env.PORT || 5000;
connectToDatabase()
    .then(() => {
    // connections and listeners
    app.listen(5000, () => console.log("Server Open & Connected to Database"));
})
    .catch((err) => console.log(err));
//# sourceMappingURL=index.js.map