import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(path.join(__dirname, "../../public")));

app.get('/api/hello', (req, res) => {
    res.send("Hello from the backend")
})

// Fix for Express 5
app.get('/{*splat}', (req, res) => {
    res.sendFile(path.join(__dirname, "../../public", "index.html"));
});

app.listen(3000, () => console.log("Server started"));