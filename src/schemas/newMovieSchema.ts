import Joi from "joi";

export const MovieSchema = Joi.object({
    name: Joi.string().required(),
    img: Joi.string().required().uri(),
    synopsis: Joi.string().required(),
    imdbgrade: Joi.number().min(0).max(100),
    releaseyear: Joi.number().required().min(1800).max(2024),
    platform: Joi.string().required(),
    coments: Joi.string().allow(null, ''),
    imdburl: Joi.string().required().uri(),
    length: Joi.number().required().min(10).max(600)


})