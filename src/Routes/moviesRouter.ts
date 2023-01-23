import { Router } from 'express';
import {getMovies, getMoviesbyGrade, addMovie, deleteMovie, updateMovie } from "../Controllers/moviesController.js"

const moviesRouter = Router();

moviesRouter.get("/", getMovies);
moviesRouter.get("/:grade", getMoviesbyGrade);
moviesRouter.post("/", addMovie);
moviesRouter.delete("/:id", deleteMovie)
moviesRouter.post("/coment", updateMovie)


export default moviesRouter;