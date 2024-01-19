import Navbar from "@/modules/app/components/navbar/navbar";
import React from "react";
import SignupForm from "../components/signUpForm";
import style from "./signUp.module.css";
export default function SignUp() {
  return (
    <div>
      <div className={style.body}>
        <Navbar></Navbar>
        <SignupForm />
      </div>
    </div>
  );
}
