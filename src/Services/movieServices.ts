import { ArrayGenres, Genres } from "../Protocols/GenreProtocol.js";
import { Movie,  NewMovie } from "../Protocols/MovieProtocol.js";
import { moviesRepository } from "../repositorys/moviesRepository.js";


async function CreateMovie(name: string, synopsis: string, imdbgrade: number, coments: string, length: number, genres: string[]){
    const exists = await moviesRepository.MoviebyName(name);
    
    return await moviesRepository.Create(name, synopsis, imdbgrade, coments, length, genres)

}

async function FindMovies(){
    return await moviesRepository.Movies();
}

async function FindbyGrade(grade: string){
    return await moviesRepository.MoviesbyGrade(grade);

}

async function UpdatebyId(id: string, movie: Movie ){
    return await moviesRepository.Update(Number(id),movie)
}

export const MoviesServices = {
    CreateMovie,
    FindMovies,
    FindbyGrade,
    UpdatebyId
}

