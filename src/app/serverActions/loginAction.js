"use server";

import { signIn } from "../auth";

export async function loginAction(formData) {
  console.log("formData", formData);
  try {
    await signIn("credentials", {
      email: formData.email,
      password: formData.password,
      redirect: false,
    });
  } catch (error) {
    console.log("error", error);
  }
}
