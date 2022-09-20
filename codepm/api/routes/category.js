import express from 'express';
import { getAll, getById, remove, save, update } from '../controller/category.js';

const routes = express.Router();

// routes.get("/", middleware, getAll);
routes.get("/", getAll);
routes.get("/:id", getById);
routes.post("/", save);
routes.delete("/:id", remove);
routes.put("/", update);

// function middleware(req, res, next) {
//     console.log('You invoke middleware');
//     next();
// }

export default routes;