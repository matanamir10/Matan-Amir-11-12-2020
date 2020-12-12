import mongoose from 'mongoose';

interface MessageAttrs {
  sender: string;
  recciver: string;
  message: string;
  subject: string;
}

interface MessageDoc extends mongoose.Document {
  sender: string;
  recciver: string;
  message: string;
  subject: string;
  createdAt: Date;
}

interface MessageModel extends mongoose.Model<MessageDoc> {
  build(messageAttrs: MessageAttrs): MessageDoc;
}

const messageSchema = new mongoose.Schema(
  {
    sender: {
      type: String,
      required: true,
    },
    recciver: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: { createdAt: true },
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

const Message = mongoose.model<MessageDoc, MessageModel>(
  'Message',
  messageSchema
);

export { Message };
