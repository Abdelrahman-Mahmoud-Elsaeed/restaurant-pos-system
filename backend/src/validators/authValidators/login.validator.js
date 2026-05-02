// require joi
import joi from 'joi';

// schema 
const loginSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
});
// export schema 
export default loginSchema;