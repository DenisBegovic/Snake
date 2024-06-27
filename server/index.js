import express from "express";
import {fileURLToPath} from "url";
import {dirname} from "path";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.json());
app.use(express.static("Snake"));

app.get("/", (req, res) => {
    res.sendFile("./index.html");
});

app.listen(8080, () => {console.log("Server is listening at port 8080!")});