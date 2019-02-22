/* becodeorg/trouvkach
 *
 * /src/server/index.js - Server entry point
 *
 * coded by leny@BeCode
 * started at 15/02/2019
 */

import express from "express";
import path from "path";
import mongoose from "mongoose";
import bodyparser from "body-parser";
const {APP_PORT} = process.env;

const app = express();

app.use(express.static(path.resolve(__dirname, "../../bin/client")));

app.get("/hello", (req, res) => {
    console.log(`ℹ️  (${req.method.toUpperCase()}) ${req.url}`);
    res.send("Hello, World!");
});

app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);
app.use(bodyparser.json());
mongoose
    .connect(
        `mongodb://dev:dev@mongo:27017/banks?authSource=admin`,

        {
            useNewUrlParser: true,
        },
    )
    .then(() => {
        console.log("CONNECTED TO BOOKSHELF TABLE");
    })
    .catch(e => {
        console.log("ERROR ON DB CONNECTION");
        console.log(e);
    });
