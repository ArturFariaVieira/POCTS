import connection from "../database.js";

export async function Movies(){

    return await connection.query
    (
        `SELECT * FROM movies`
    )
}

export async function MoviesbyGrade(grade: string){
    console.log(grade);

    const num = Number(grade);
        return await connection.query
        (
            `SELECT * FROM movies WHERE imdbgrade > $1`,
            [num]
        )
   
    

}
export async function insertMovie(body){
    const{ name, img, synopsis, imdbgrade, releaseyear, platform, coments, imdburl, length } = body;
    return await connection.query (
        `INSERT INTO movies ("name", "img", "synopsis", "imdbgrade", "releaseyear", "platform", "coments", "imdburl", "length")
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
        [name, img, synopsis, imdbgrade, releaseyear, platform, coments, imdburl, length]
    )
}

export async function removeMovie(id: string){
    const num = Number(id)
    return await connection.query (
        `DELETE FROM movies
        WHERE id = $1`,
        [num]
    )
}

export async function addComment (coment : string, id : number){
    return await connection.query (
        `UPDATE movies SET coments = $1 WHERE id = $2 `,
        [coment, id]
    )
}