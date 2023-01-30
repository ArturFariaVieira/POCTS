import {MoviesServices} from "../Services/movieServices.js"
import express, {Request, Response} from "express";
import { MovieEntity, NewMovie, Movie } from "../Protocols/MovieProtocol.js";

export async function getMovies(req: Request, res: Response) {
    try{
        const movies = await MoviesServices.FindMovies();
        return res.send(movies);
    }catch(err){
        console.log(err);
        res.sendStatus(500);
    }
}

export async function getMoviesbyGrade(req: Request, res: Response){
    const {grade} = req.params
    try{
        const movies = await MoviesServices.FindbyGrade(grade);
        return res.send(movies);
    }catch(err){
        console.log(err);
        res.sendStatus(500);
    }
}

export async function CreateMovie(req: Request, res: Response){
    const {name, synopsis, imdbgrade, coments, length, genres} = req.body
    try{
        await MoviesServices.CreateMovie(name, synopsis, imdbgrade, coments, length, genres);
        return res.sendStatus(200)
    }catch(err){
        console.log(err);
        res.sendStatus(500);
    }


}

export async function UpdateMovie(req: Request, res: Response){
    const {id} = req.params;
    const movie = req.body as Movie
    try{
        await MoviesServices.UpdatebyId(id, movie)
        return res.sendStatus(200)
    }catch(err){
        console.log(err);
        res.sendStatus(500)
    }
}