import { StatusCodes } from "http-status-codes";
import bcrypt from "bcrypt";
import { createUser, searchUser } from "../repositories/auth.repository.js";

const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const { rowCount } = await searchUser(email);
    if (rowCount !== 0) return res.sendStatus(StatusCodes.CONFLICT);
    await createUser(name, email, bcrypt.hashSync(password, 10));
    res.sendStatus(StatusCodes.CREATED);
  } catch (error) {
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

export { signup };
