import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET as string;

export interface JwtPayload {
  userId: string | null;
  email: string | null;
}

export function signToken(payload: JwtPayload) {
  return jwt.sign(payload, SECRET, {
    expiresIn: "7d",
  });
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, SECRET) as JwtPayload;
  } catch {
    return null;
  }
}