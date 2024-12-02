import express from "express";
import routes from "./routes/routes.js";
import { PORT } from "./config/config.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes)



app.listen(PORT, () => {
  console.log(`Servidor ok en ${PORT}`);
});
