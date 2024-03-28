"use client";
import React, { useRef } from "react";
import { signIn } from "next-auth/react";

function Login() {
  const userIdRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(userIdRef.current);
    //console.log(passwordRef.current);

    const result = await signIn("credentials", {
      userId: userIdRef.current,
      password: passwordRef.current,
      redirect: true,
      callbackUrl: "/main",
    });
  };

  return (
    <main>
      <h1>Login</h1>
      <div>
        <div>
          <label htmlFor="userId">UserId</label>
          <div>
            <input
              ref={userIdRef}
              onChange={(e) => {
                userIdRef.current = e.target.value;
              }}
              id="userId"
              name="userId"
              type="text"
              required
              autoFocus={true}
            />
          </div>
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <div>
            <input
              type="password"
              id="password"
              name="password"
              ref={passwordRef}
              onChange={(e) => (passwordRef.current = e.target.value)}
            />
          </div>
        </div>

        <div>
          <button onClick={handleSubmit}>Log In</button>
        </div>
      </div>
    </main>
  );
}

export default Login;
