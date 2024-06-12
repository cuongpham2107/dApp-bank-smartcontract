import dotenv from "dotenv";
dotenv.config();
import app from "./src/app";

app.listen(process.env.PORT || 3000, () => {
    console.log(`Listen on the port ${process.env.PORT || 3000}...`);
});
  