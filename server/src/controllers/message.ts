import { StatusCodes } from 'http-status-codes';
import {
  Controller,
  ClassErrorMiddleware,
  Middleware,
  Get,
  Post,
  Delete,
} from '@overnightjs/core';
import { NextFunction, Request, Response } from 'express';
// import { Logger } from '@overnightjs/logger';
import { body, param } from 'express-validator';
import { errorHandler } from '../middlewares/errorHandler';
import { validateRequest } from '../middlewares/validationError';
import { Message } from '../db/models/message';

@Controller('api/message')
@ClassErrorMiddleware(errorHandler)
export class UserController {
  @Get(':senderId')
  @Middleware([
    param('senderId').isString().withMessage('senderId is required'),
    validateRequest,
  ])
  private async getAllMessages(req: Request, res: Response) {
    const { senderId } = req.params;
    const sendedMessages = await Message.find({ senderId });
    const reccivedMessages = await Message.find({ recciverId: senderId });
    return res
      .status(StatusCodes.OK)
      .send({ sended: sendedMessages, reccived: reccivedMessages });
  }
  @Post('create')
  @Middleware([
    body('senderId').not().isEmpty(),
    body('recciverId').not().isEmpty(),
    body('message').not().isEmpty(),
    body('subject').isLength({ max: 30 }),
    validateRequest,
  ])
  private async createMessage(req: Request, res: Response): Promise<Response> {
    // Logger.Info(req.body, true);
    const { senderId, recciverId, message, subject } = req.body;
    const messageDoc = Message.build({
      senderId,
      recciverId,
      message,
      subject,
    });
    await messageDoc.save();
    return res.status(StatusCodes.CREATED).send({ message: messageDoc });
  }

  @Delete('delete/:messageId')
  @Middleware([
    param('messageId').isString().withMessage('messageId is required'),
  ])
  private async deleteMessage(req: Request, res: Response) {
    const { messageId } = req.params;
    console.log(messageId);
    const doc = await Message.findOneAndRemove({ _id: messageId });
    console.log('doc', doc);
    res.send(doc ? 'Message was deleted sucessufly' : {});
  }
}
