"use server";

import DBconnection from "../utilis/config/db";
import userModel from "../utilis/models/User";
import bcrypt from "bcryptjs";

export async function registerAction(registerDetails) {
  console.log("user Details", registerDetails);
  await DBconnection();
  
  const existingUser=await userModel.findOne({ email: registerDetails.Email });
  if(existingUser){
    throw new Error("User already exists with this email");
  }
  
  const hashedPassword= await bcrypt.hash(registerDetails.Password,10);
  
   const normalizedUser = {
    username: registerDetails.UserName,
    email: registerDetails.Email,
    password: hashedPassword,
  };

  await userModel.create(normalizedUser);
  return { message: "User Registered Successfully" };
}
