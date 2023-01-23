import { Router } from 'express';
import {getMovies, getMoviesbyGrade, addMovie, deleteMovie, updateMovie } from "../Controllers/moviesController.js"
import {addCommentMiddleware, movieValidationMiddleware} from "../Middlewares/movieMiddleware.js"

const moviesRouter = Router();

moviesRouter.get("/", getMovies);
moviesRouter.get("/:grade", getMoviesbyGrade);
moviesRouter.post("/", movieValidationMiddleware, addMovie);
moviesRouter.delete("/:id", deleteMovie)
moviesRouter.post("/coment", addCommentMiddleware, updateMovie)


export default moviesRouter;