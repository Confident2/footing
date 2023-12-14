"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
const Register = () => {
  return (
    <div className="mx-24 max-w-full mt-20">
      <h1 className={styles.title}>Create an Account</h1>
      <h2 className={styles.subtitle}>Please sign up to see the dashboard.</h2>
      <form className={styles.form}>
        <input
          type="text"
          placeholder="Username"
          required
          className={styles.input}
        />
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
        <button className={styles.button}>Register</button>
        {/* {error && "Something went wrong!"} */}
      </form>
      <span className={styles.or}>- OR -</span>
      <Link className={styles.link} href="../login/page.jsx">
        Login with an existing account
      </Link>
    </div>
  );
};

export default Register;
