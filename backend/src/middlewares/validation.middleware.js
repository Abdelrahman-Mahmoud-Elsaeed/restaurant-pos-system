const validate = (schema) => {
  return (req, res, next) => {

    const data = { body: req.body, };

    const { error } = schema.validate(data, {
      abortEarly: false,
      stripUnknown: true,
    });
    if (error) {
      return res.status(400).json({
        success: false,
        errors: error.details.map(
          (err) => err.message
        ),
      });
    }
    next();
  };
};
export default validate;