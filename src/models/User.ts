import mongoose from "mongoose";

interface User {
  name: string;
  email: string;
  company: string;
  numberOfAffiliates: number;
}

const UserSchema = new mongoose.Schema<User>({
  name: String,
  email: String,
  company: String,
  numberOfAffiliates: Number,
});

export default mongoose.models.User || mongoose.model<User>("User", UserSchema);
