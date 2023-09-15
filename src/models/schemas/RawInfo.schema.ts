import { Schema } from 'mongoose';
import { toJSON } from './plugins';
import { type IRawInfo } from '../../interfaces';
import mongooseUniqueValidator from 'mongoose-unique-validator';

const rawInfoSchema = new Schema<IRawInfo>({
  type: {
    type: Number,
  },
  author: {
    type: String,
  },
  content: {
    type: String,
  },
  user_mentions: [
    {
      type: String,
    },
  ],
  role_mentions: [
    {
      type: String,
    },
  ],
  reactions: [
    {
      type: String,
    },
  ],
  replied_user: {
    type: String,
  },
  createdDate: {
    type: Date,
  },
  messageId: {
    type: String,
    unique: true,
  },
  channelId: {
    type: String,
  },
  channelName: {
    type: String,
  },

  threadId: {
    type: String,
  },
  threadName: {
    type: String,
  },
  isGeneratedByWebhook: {
    type: Boolean,
  },
});

// Plugins
rawInfoSchema.plugin(toJSON);
rawInfoSchema.plugin(mongooseUniqueValidator);

export default rawInfoSchema;
