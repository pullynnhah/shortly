import DB from "../database/db.js";

const createUser = (name, email, password) => {
  return DB.query(
    `INSERT INTO users (name, email, password)
     VALUES ($1, $2, $3);`,
    [name, email, password],
  );
};

const searchUser = email => {
  return DB.query(
    `SELECT id, password
     FROM users
     WHERE email = $1;`,
    [email],
  );
};

export { createUser, searchUser };
