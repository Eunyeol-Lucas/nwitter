import React, { useState } from 'react';
import { authService } from "fbase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
const AuthForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("");
    const onChange = (e) => {
      const { name, value } = e.target;
      if (name === "email") {
        setEmail(value);
      } else if (name === "password") {
        setPassword(value);
      }
    };
  
    const onSubmit = async (e) => {
      e.preventDefault();
      try {
        let data;
        if (newAccount) {
          //create account
          data = await createUserWithEmailAndPassword(
            authService,
            email,
            password
          );
        } else {
          // login
          data = await signInWithEmailAndPassword(authService, email, password);
        }
        console.log(data);
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
    };
    const toggleAccount = () => setNewAccount((prev) => !prev);
    return (
      <>
        <form onSubmit={onSubmit} className="container">
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={onChange}
            className="authInput"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={onChange}
            className="authInput"
          />
          <input
            type="submit"
            value={newAccount ? "Create Account" : "Sign In"}
            className="authInput authSubmit"
          />
          {error && <span className="authError">{error}</span>}
        </form>
        <span onClick={toggleAccount} className="authSwitch">
          {newAccount ? "Sign in" : "Create Account"}
        </span>
      </>
    );
};

export default AuthForm;