import * as bodyParser from 'body-parser';
import 'express-async-errors';
import { Server } from '@overnightjs/core';
import cors from 'cors';
import cookieSession from 'cookie-session';
import { NotFoundError } from './errors/notFound';
import { currentUser } from './middlewares/current-user';
import { errorHandler } from './middlewares/errorHandler';
import { AuthController } from './controllers/auth';
import { MessageController } from './controllers/message';

export class ServerApp extends Server {
  constructor() {
    super(process.env.NODE_ENV === 'development'); // setting showLogs to true
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(
      cookieSession({
        signed: false,
        // secure: process.env.NODE_ENV !== 'test',
        secure: false,
      })
    );

    this.setupControllers();
    this.app.all('*', async () => {
      throw new NotFoundError();
    });

    this.app.use(errorHandler);
  }

  private setupControllers(): void {
    const authController = new AuthController();
    const messageController = new MessageController();
    super.addControllers(
      [authController, messageController]
      /*, optional router here*/
      /* middleware that will apply to all controllers here */
      // add here morgan http middlaware
    );
  }

  public start(port: number): void {
    this.app.listen(port, () => {
      console.log(`App running on port: ${port}`);
    });
  }
}
