import { StatusCodes } from "http-status-codes";

const validate = schema => (req, res, next) => {
  const validation = schema.validate(req.body);
  if (validation.error) res.sendStatus(StatusCodes.UNPROCESSABLE_ENTITY);
  else next();
};

export default validate;
