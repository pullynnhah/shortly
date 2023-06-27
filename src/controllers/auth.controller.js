import { StatusCodes } from "http-status-codes";
import bcrypt from "bcrypt";
import { createUser, searchUser } from "../repositories/auth.repository.js";
import jwt from "jsonwebtoken";

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

const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const { rows } = await searchUser(email);

    if (rows.length === 0 || !bcrypt.compareSync(password, rows[0].password))
      return res.sendStatus(StatusCodes.UNAUTHORIZED);

    const token = await jwt.sign({ userId: rows[0].id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    return res.status(StatusCodes.OK).send({ token });
  } catch (error) {
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};
export { signup, signin };
