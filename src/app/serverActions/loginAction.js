"use server";

import { signIn } from "../auth";

export async function loginAction(formData) {
  console.log("formData", formData);
  try {
    const responce= await signIn("credentials", {
      email: formData.email,
      password: formData.password,
      redirect: false,
    });
    if(!responce || responce.error){
      console.log("login failed", responce.error);
      throw new Error("login failed");
    }
    return{message:true}

  } catch (error) {
    console.log("error", error);
  }
}
