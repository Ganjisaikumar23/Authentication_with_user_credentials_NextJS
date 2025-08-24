import React from "react";
import { auth } from "./auth";
import { redirect } from "next/navigation";
import Link from "next/link";

const HomePage = async () => {
  const session = await auth();
  if (!session) {
    return redirect("/login");
  }
  return (
    <>
      <div>Welcome to HomePage</div>
      <Link href="/api/auth/signout">Logout</Link>
    </>
  );
};

export default HomePage;
