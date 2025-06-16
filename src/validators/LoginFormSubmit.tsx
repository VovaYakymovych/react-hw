import * as Joi from "joi";

export const loginValidator = Joi.object({
    username: Joi.string().required().pattern(new RegExp('^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$')).messages({'string.pattern.base':'Invalid name!'}),
    password: Joi.string().required().pattern(new RegExp('^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$')).messages({'string.pattern.base':'Invalid password!'})
})