import { movie, genre, platform } from "@prisma/client"

export type MovieEntity = movie

export type NewMovie = Omit<movie, "id" | "createdAt">

export type Movie = Partial<movie>