// require joi
import joi from'joi' ;

// schema 
const registerSchema = joi.object({
    name:joi.string().min(10).max(50).required(),
    mobile:joi.string().min(11).required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
});
// export schema 
module.exports = {registerSchema};