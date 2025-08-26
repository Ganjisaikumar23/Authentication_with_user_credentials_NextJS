"use client";

import React, { useState } from "react";
import { loginAction } from "../serverActions/loginAction";
import { useRouter } from "next/navigation";
import Link from "next/link";

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const registerHandler = async (e) => {
    e.preventDefault();

    const userData = { email, password };
    console.log("userData", userData);
    try {
      const responce = await loginAction(userData);
      if (responce.message) {
        router.push("/");
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      setError("An error occurred during login");
      console.log("error", error);
    }
  };

  return (
    <div className="formContainer">
      <h2>Login form</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
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
          type="password"
          name="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br /> <br />
        <button>Login</button>
        <Link href="/register" style={{ marginLeft: "10px" }}>
          New user? Register
        </Link>
      </form>
    </div>
  );
};

export default page;
