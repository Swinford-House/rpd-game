import express from "express";
import path from "path";

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.sendFile(path.resolve(import.meta.url, "dist/index.html"));
});

app.use(express.static(path.join(import.meta.url, "dist/public")));

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
