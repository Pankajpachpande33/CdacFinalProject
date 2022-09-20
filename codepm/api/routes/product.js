import express from 'express';
import { getAll, getById, remove, save, update } from '../controller/product.js';

const routes = express.Router();

routes.get("/", getAll);
routes.get("/:id", getById);
routes.post("/", save);
routes.delete("/:id", remove);
routes.put("/", update);

export default routes;