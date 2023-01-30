import prisma from "../database.js";
import  { MovieEntity, Movie, NewMovie } from "../Protocols/MovieProtocol.js";
import { QueryResult } from "pg";
import { Genres, ArrayGenres } from "../Protocols/GenreProtocol.js";

async function Movies(){

    return (
        await prisma.movie.findMany({
            include: {
                genres: {
                    select: {
                        name: true
                    }
                },
                platforms: {
                    select: {
                        name: true
                    }
                }
        }})
    )
    
}

async function MoviesbyGrade(grade: string){
    console.log(grade);

    const num = Number(grade);
        return await prisma.movie.findMany({
            where: {
                imdbgrade: {
                    gte: num
                }
            },
                include: {
                genres: {
                    select: {
                        name: true
                    }
                },
                platforms: {
                    select: {
                        name: true
                    }
                }
        }
        })
   
}
async function MoviebyName(name: string){
    return await prisma.movie.findFirst({
        where: {
            name
        }
    })
}

async function Create(name: string, synopsis: string, imdbgrade: number, coments: string, length: number, genres: string[]){
    console.log(genres[0])
    
    return await prisma.movie.create({
        data: {
            name: name,
            synopsis: synopsis,
            imdbgrade: imdbgrade,
            coments: coments,
            length: length,
            genres: {
                create: [
                    { name: genres[0]},
                    genres[1]?{name: genres[1]}:null,
                    genres[2]?{name: genres[2]}:null,
                    genres[3]?{name: genres[3]}:null,
                    genres[4]?{name: genres[4]}:null,

                ]
            }
  
            
                
            

        }
    }
    )
}

async function Update(id: number, movie: Movie){
    return await prisma.movie.update({
        where: {id},
        data: movie
    })
}


export const moviesRepository = {
    Movies,
    MoviesbyGrade,
    MoviebyName,
    Create,
    Update

}