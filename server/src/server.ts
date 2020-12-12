import * as bodyParser from 'body-parser';
import { ClassErrorMiddleware, Server } from '@overnightjs/core';
import cors from 'cors';
import { NotFoundError } from './errors/notFound';
import { UserController } from './controllers/message';
import { errorHandler } from './middlewares/errorHandler';

export class ServerApp extends Server {
  constructor() {
    super(process.env.NODE_ENV === 'development'); // setting showLogs to true
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.setupControllers();
  }

  private setupControllers(): void {
    const userController = new UserController();
    super.addControllers(
      [userController]
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
