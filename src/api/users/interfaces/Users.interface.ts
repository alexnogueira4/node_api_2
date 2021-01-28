import { Document, Model } from "mongoose";

export interface IUser {
  name: String,
  username: String,
	email: String,
	password: String
}

export interface IUserDocument extends IUser, Document { }

export interface IUserModel extends Model<IUserDocument> { }