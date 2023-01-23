import connection from "../database.js";
import  { MovieEntity, Movie } from "../Protocols/MovieProtocol.js";
import { QueryResult } from "pg";

export async function Movies(): Promise<QueryResult<MovieEntity>>{

    return await connection.query
    (
        `SELECT * FROM movies`
    )
}

export async function MoviesbyGrade(grade: string): Promise<QueryResult<MovieEntity>>{
    console.log(grade);

    const num = Number(grade);
        return await connection.query
        (
            `SELECT * FROM movies WHERE imdbgrade > $1`,
            [num]
        )
   
    

}
export async function insertMovie(body: MovieEntity): Promise<QueryResult<Movie>>{
    const{ name, img, synopsis, imdbgrade, releaseyear, platform, coments, imdburl, length } = body;
    return await connection.query (
        `INSERT INTO movies ("name", "img", "synopsis", "imdbgrade", "releaseyear", "platform", "coments", "imdburl", "length")
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
        [name, img, synopsis, imdbgrade, releaseyear, platform, coments, imdburl, length]
    )
}

export async function removeMovie(id: string): Promise<QueryResult<Movie>>{
    const num = Number(id)
    return await connection.query (
        `DELETE FROM movies
        WHERE id = $1`,
        [num]
    )
}

export async function addComment (coment : string, id : number):Promise<QueryResult>{
    return await connection.query (
        `UPDATE movies SET coments = $1 WHERE id = $2 `,
        [coment, id]
    )
}