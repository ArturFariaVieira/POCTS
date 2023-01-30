import Joi from "joi";

export const commentSchema = Joi.object({
    id: Joi.number().required().min(1),
    coment: Joi.string().required()
})


