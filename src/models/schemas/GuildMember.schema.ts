import { Schema } from 'mongoose';
import { toJSON } from './plugins';
import { type IGuildMember, type GuildMemberModel } from '../../interfaces';

const guildMemberSchema = new Schema<IGuildMember, GuildMemberModel>({
  discordId: {
    type: String,
    unique: true,
  },
  username: {
    type: String,
  },
  roles: [
    {
      type: String,
    },
  ],
  joinedAt: {
    type: Date,
  },
  avatar: {
    type: String,
  },
  isBot: {
    type: Boolean,
  },
  discriminator: {
    type: String,
  },
  permissions: {
    type: String,
  },
  deletedAt: {
    type: Date,
    default: null,
  },
});

guildMemberSchema.method('softDelete', async function softDelete() {
  this.deletedAt = Date.now();
  await this.save();
});

// Plugins
guildMemberSchema.plugin(toJSON);

export default guildMemberSchema;
