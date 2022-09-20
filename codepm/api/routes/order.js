import express from 'express';
import { getAll, save } from '../controller/order.js';

const routes = express.Router();

routes.get("/", getAll);
routes.post("/", save);

export default routes;