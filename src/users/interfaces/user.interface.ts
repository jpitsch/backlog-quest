import { Document, Types } from "mongoose";

export interface User extends Document {
  readonly _id: Types.ObjectId;
  readonly username: string;
  readonly password: string;
}