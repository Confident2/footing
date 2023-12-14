"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";

import Link from "next/link";

const Login = ({ url }) => {
  return (
    <div className="mx-24 max-w-full mt-20  flex flex-col gap-[20px]  mb-20">
      <h1 className={styles.title}> Welcome Back</h1>
      {/* <h2 className={styles.subtitle}>Please sign in to see the dashboard.</h2> */}

      <form className="w-[500px] flex flex-col gap-[20px]">
        <input
          type="text"
          placeholder="Email"
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className={styles.input}
        />
        <div className=" flex flex-col gap-3 w-[500px] items-start">
          <button className={styles.button}>Login</button>
        </div>
      </form>
      {/* <div className=" flex flex-col gap-5 w-[500px] items-start">
        <button>Login with Google</button>
      </div> */}

      <span className={styles.or}>- OR -</span>
      <Link className={styles.link} href="/signup" legacyBehavior>
        Create new account
      </Link>
      {/* <button
        onClick={() => {
          signIn("github");
        }}
        className={styles.button + " " + styles.github}
      >
        Login with Github
      </button> */}
    </div>
  );
};

export default Login;
