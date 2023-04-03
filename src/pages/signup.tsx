// pages/signup.tsx
import React, { useState, FormEvent } from "react";
import Image from "next/image";
import styles from "./signup.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

const Signup: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    numberOfAffiliates: "",
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push("/");
      } else {
        console.error("Failed to save user");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <header>
        <div className={styles.headerContainer}>
          <div className={styles.logo}>
            <Image
              src="/images/logo.png"
              alt="Chain Affiliate"
              width={300}
              height={400}
            />
          </div>
          <div className={styles.headerSignup}>
            <Link href="/signup" className={styles.signupLink}>
              Sign up
            </Link>
          </div>
        </div>
      </header>
      <h1 className={styles.h1}>Signup</h1>
      <div className={styles.signupForm}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label} htmlFor="name">
            Name:
          </label>
          <input
            className={styles.input}
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label className={styles.label} htmlFor="email">
            Email:
          </label>
          <input
            className={styles.input}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label className={styles.label} htmlFor="company">
            Company:
          </label>
          <input
            className={styles.input}
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
          <label className={styles.label} htmlFor="numberOfAffiliates">
            Number of Affiliates:
          </label>
          <input
            className={styles.input}
            type="number"
            id="numberOfAffiliates"
            name="numberOfAffiliates"
            min="0"
            value={formData.numberOfAffiliates}
            onChange={handleChange}
          />
          <button className={styles.button} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
