import { genre } from "@prisma/client"

export type Genres = Omit<genre, "id">

export type ArrayGenres = Genres[]