import { Schema, model } from "mongoose";
import { IUser } from "../interfaces/Users.interface";
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  username: {
    type: String,
    trim: true,
    required: true,
    unique: true
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true
  },
  password: {
    type: String,
    trim: true,
    required: true
  },

});

UserSchema.pre('save', async function (this: IUser, next) {
  bcrypt.genSalt(10, (err, salt) => {
    
    if (err) return next(err);

    bcrypt.hash(this.password, salt, null, (error, hash) => {
      
      if (error) return next(error);

      this.password = hash;

      return next();
    });
  });

  return next(null);
});

const UserModel = model("user", UserSchema);

export default UserModel;