import express, { Request, Response} from "express";
import router from './Routes/indexRoutes.js';
import dotenv from "dotenv";
dotenv.config()


const app = express();
app.use(express.json());
app.use(router);

app.listen(4000, () => {
    console.log('Server is listening on port 4000.');
  });

