import { Router } from 'express';
import {getMovies, getMoviesbyGrade, CreateMovie, UpdateMovie} from "../Controllers/moviesController.js"
import {addCommentMiddleware, movieValidationMiddleware} from "../Middlewares/movieMiddleware.js"

const moviesRouter = Router();

moviesRouter.get("/", getMovies);
moviesRouter.get("/:grade", getMoviesbyGrade);
moviesRouter.post("/newmovie", CreateMovie);
moviesRouter.post("/:id", UpdateMovie)



export default moviesRouter;