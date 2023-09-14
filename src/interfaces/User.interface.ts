import { type Snowflake } from 'discord.js';
import { type Model } from 'mongoose';

export interface IUser {
  discordId: Snowflake;
  username?: string;
  discriminator?: string;
  avatar?: string;
  bot?: boolean;
  system?: boolean;
  mfa_enabled?: boolean;
  banner?: string;
  accent_color?: number;
  locale?: string;
  verified?: boolean;
  email?: string;
  flags?: number;
  premium_type?: number;
  public_flags?: number;
  twitterId?: string;
  twitterUsername?: string;
  twitterProfileImageUrl?: string;
}

export interface IUserUpdateBody {
  avatar?: string;
  twitterId?: string;
  twitterUsername?: string;
  twitterProfileImageUrl?: string;
  email?: string;
  verified?: boolean;
}

export interface UserModel extends Model<IUser> {
  paginate: (filter: object, options: object) => any;
}
