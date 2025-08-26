"use client";

import React, { useState } from "react";
import { registerAction } from "../serverActions/registerAction";
import { useRouter } from "next/navigation";
import Link from "next/link";

const route = () => {
  const [UserName, setUserName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const registerHandler = async (e) => {
    e.preventDefault();
    const registerDetails = { UserName, Email, Password };
    console.log("registerDetails", registerDetails);
    try {
      await registerAction(registerDetails);
      router.push("/login");
      alert("Registration Successful. Please login.");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="formContainer">
      <h2>Register Form</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form className="formSection" onSubmit={registerHandler}>
        <h3>UserName</h3>
        <input
          type="text"
          name="username"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
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
        <button>Register</button>
        <Link href="/login" style={{ marginLeft: "10px" }}>
          Already have an account? Login
        </Link>
      </form>
    </div>
  );
};

export default route;
