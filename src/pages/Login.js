import React from "react";
import { auth, googleProvider } from "../firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  //useNavigateHook
  const navigate = useNavigate();
  const handleLoginWithGoogle = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const handleSignoutWithGoogle = async () => {
    try {
      await signOut(auth);

      navigate("/login");
      console.log("signout sucessfull");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button onClick={handleLoginWithGoogle}>login</button>
      <button onClick={handleSignoutWithGoogle}>Signout</button>
    </div>
  );
};

export default Login;
