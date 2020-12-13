import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
interface UserPayload {
  email: string;
  userId: string;
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
    }
  }
}

export const currentUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log('in currentUser middlware');
  console.log(process.env.JWT_KEY);
  console.log(req.session?.jwt);
  if (!req.session?.jwt) {
    return next();
  }

  try {
    const payload = jwt.verify(
      req.session.jwt,
      process.env.JWT_KEY!
    ) as UserPayload;
    req.currentUser = payload;
  } catch (err) {}

  next();
};
