import { Movies, MoviesbyGrade, insertMovie, removeMovie, addComment } from "../repositorys/moviesRepository.js";
import express, {Request, Response} from "express";

export async function getMovies(req: Request, res: Response){
    try{
        const movies = await Movies();
        res.send(movies.rows);
    }catch(err){
        console.log(err);
        res.sendStatus(500);
    }
}

export async function getMoviesbyGrade(req: Request, res: Response){
    const {grade} = req.query as Record<string, string>;
    try{
        const movies = await MoviesbyGrade(grade);
        res.send(movies.rows);
    }catch(err){
        console.log(err);
        res.sendStatus(500);
    }
}

export async function addMovie(req: Request, res: Response){
    try{
        const movies = await insertMovie(req.body);
        res.sendStatus(201);
    }catch(err){
        console.log(err);
        res.sendStatus(500);
    }
}

export async function deleteMovie(req: Request, res: Response){
    const {id} = req.query as Record<string, string>;
    try{
        await removeMovie(id);
        res.sendStatus(200)
    }catch(err){
        console.log(err);
        res.sendStatus(500);
    }
}

export async function updateMovie(req: Request, res: Response){
    const {coment, id} = req.body;
    try{
        await addComment(coment, id);
        res.sendStatus(200);
    }catch(err){
        console.log(err);
        res.sendStatus(500);
    }
}