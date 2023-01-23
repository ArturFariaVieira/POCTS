import express, {Request, Response, NextFunction} from "express";
import { MovieSchema } from "../schemas/newMovieSchema.js";
import {commentSchema} from "../schemas/addCommentSchema.js"
export async function movieValidationMiddleware(req: Request, res: Response, next: NextFunction){
    const valid = MovieSchema.validate(req.body);
    if (valid.error) {
        return res.status(422).send(valid.error.message);
      }

      next();
}

export async function addCommentMiddleware(req: Request, res: Response, next: NextFunction){
    const valid = commentSchema.validate(req.body);
    if (valid.error) {
        return res.status(422).send(valid.error.message);
      }
      next();

}
