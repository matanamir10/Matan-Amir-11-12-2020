import { Controller, Middleware, Get, Post } from '@overnightjs/core';
import { Request, Response } from 'express';
import { body } from 'express-validator';
import jwt from 'jsonwebtoken';
import { validateRequest } from '../middlewares/validationError';
import { BadRequestError } from '../errors/badRequest';
import { User } from '../db/models/user';
import { currentUser } from '../middlewares/current-user';

@Controller('api/users')
export class AuthController {
  @Get('currentuser')
  @Middleware(currentUser)
  private async currentUser(req: Request, res: Response) {
    res.send({ currentUser: req.currentUser || null });
  }

  @Post('signin')
  @Middleware([
    body('email').isEmail().withMessage('Email must be valid'),
    body('userId').trim().notEmpty().withMessage('You must supply a userId'),
    validateRequest,
  ])
  private async signin(req: Request, res: Response) {
    const { email, userId } = req.body;

    const existingUser = await User.findOne({ email, userId });
    if (!existingUser) {
      throw new BadRequestError('Invalid credentials');
    }

    const userJwt = jwt.sign({ email, userId }, process.env.JWT_KEY!);

    req.session = {
      jwt: userJwt,
    };

    res.send(existingUser);
  }

  @Post('signup')
  @Middleware([
    body('email').isEmail().withMessage('Email must be valid'),
    body('userId').trim().notEmpty().withMessage('You must supply a userId'),
    validateRequest,
  ])
  private async signup(req: Request, res: Response) {
    const { email, userId } = req.body;

    const existingUser = await User.findOne({ email, userId });
    if (existingUser) {
      throw new BadRequestError(
        'Email in use or UserId has already been taken'
      );
    }
    const user = User.build({ email, userId });
    await user.save();
    // Generate JWT
    const userJwt = jwt.sign({ email, userId }, process.env.JWT_KEY!);

    // Store it on session object
    req.session = {
      jwt: userJwt,
    };

    res.status(201).send(user);
  }

  @Post('signout')
  private async signout(req: Request, res: Response) {
    req.session = null;
    res.send({});
  }
}
