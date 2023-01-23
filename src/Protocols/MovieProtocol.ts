export type MovieEntity = {
    id: number,
    name: string,
    img: string,
    synopsis: string,
    imdbgrade: number,
    releaseyear: number,
    platform: string,
    coments: string,
    imdburl: string,
    length: number,
    createdAt: Date
}

export type Movie = Omit<MovieEntity, "id" | "createdAt">

