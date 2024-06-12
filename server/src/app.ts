import express, { Express, Request, Response } from "express";
const app: Express = express();
import createError from "http-errors";
import cookieParser from "cookie-parser";
import cors from "cors";
import router from "./api/v1/routes/index";

interface Error {
  status?: number;
  message?: string;
}

app.use(
	express.urlencoded({
		extended: true,
	}),
);
app.use(cookieParser());
app.use(cors());

app.get('/', (req, res) => {
	res.send('APP IS RUNNING');
});

app.use('/api/v1', router);

app.use((req, res, next) => {
	next(createError(404));
});
app.use((err: Error , req: Request, res: Response) => {
	res.status(err.status || 500).send(err.message);
});

export default app;

