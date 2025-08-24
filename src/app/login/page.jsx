"use client";

import React, { useState } from "react";
import { loginAction } from "../serverActions/loginAction";
import { useRouter } from "next/navigation";

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const registerHandler = (e) => {
    e.preventDefault();

    const userData = { email, password };
    console.log("userData", userData);
    loginAction(userData);
    router.push("/");
  };

  return (
    <div className="formContainer">
      <h2>Login form</h2>
      <form className="formSection" onSubmit={registerHandler}>
        <h3>Email</h3>
        <input
          type="email"
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <h3>Password</h3>
        <input
          type="text"
          name="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br /> <br />
        <button>Login</button>
      </form>
    </div>
  );
};

export default page;
