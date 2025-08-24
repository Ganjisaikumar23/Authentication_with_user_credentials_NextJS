"use server";

import DBconnection from "../utilis/config/db";
import userModel from "../utilis/models/User";

export async function registerAction(registerDetails) {
  console.log("user Details", registerDetails);
  await DBconnection();
  const normalizedUser = {
    username: registerDetails.UserName,
    email: registerDetails.Email,
    password: registerDetails.Password,
  };

  await userModel.create(normalizedUser);
  return { message: "User Registered Successfully" };
}
