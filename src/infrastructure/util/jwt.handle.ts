import { sign, verify } from "jsonwebtoken";

const SECRET: string = process.env.JWT_SECRET!;

const generateToken = (id: string) => {
  const jwt = sign({ id }, SECRET, {
    expiresIn: "2h",
  });
  return jwt;
};

const verifyToken = (token: string) => {
  const isOk = verify(token, SECRET);
  return isOk;
};

export { generateToken, verifyToken };
