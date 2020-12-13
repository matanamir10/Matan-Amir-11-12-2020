import mongoose from 'mongoose';

interface MessageAttrs {
  senderId: string;
  recciverId: string;
  message: string;
  subject: string;
}

interface MessageDoc extends mongoose.Document {
  senderId: string;
  recciverId: string;
  message: string;
  subject: string;
  createdAt: Date;
}

interface MessageModel extends mongoose.Model<MessageDoc> {
  build(messageAttrs: MessageAttrs): MessageDoc;
}

const messageSchema = new mongoose.Schema(
  {
    senderId: {
      type: String,
      required: true,
    },
    recciverId: {
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
    timestamps: { createdAt: true, updatedAt: false },
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

messageSchema.statics.build = (messageAttrs: MessageAttrs) => {
  return new Message(messageAttrs);
};

const Message = mongoose.model<MessageDoc, MessageModel>(
  'Message',
  messageSchema
);

export { Message };
