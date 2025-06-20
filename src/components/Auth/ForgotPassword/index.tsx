"use client";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { validateEmail } from "@/libs/validateEmail";
import axios from "axios";
import Loader from "@/components/Common/Loader";
import { integrations, messages } from "../../../../integrations.config";
import z from "zod";

const ForgotPasswordSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
});

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loader, setLoader] = useState(false);

  const sendEmail = async (e: any) => {
    e.preventDefault();

    if (!integrations?.isAuthEnabled) {
      toast.error(messages.auth);
      return;
    }

    const result = ForgotPasswordSchema.safeParse({ email });
    if (!result.success) {
      toast.error(result.error.errors[0].message);
      return;
    }

    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email address.");
    }

    setLoader(true);

    try {
      const res = await axios.post("/api/forgot-password/reset", {
        email: email.toLowerCase(),
      });

      if (res.status === 404) {
        toast.error("User not found.");
        return;
      }

      if (res.status === 200) {
        toast.success(res.data);
        setEmail("");
      }

      setEmail("");
      setLoader(false);
    } catch (error: any) {
      toast.error(error?.response.data);
      setLoader(false);
    }
  };

  return (
    <section className="flex items-center justify-center py-20">
      <div className="w-full max-w-md rounded-2xl bg-white/[0.05] p-8 sm:p-10">
        <h2 className="mb-6 text-center text-xl font-semibold text-white sm:text-2xl">
          Forgot your password?
        </h2>
        <p className="mb-6 text-center text-white/80">
          Enter your email below and we&apos;ll send you a link to reset your password.
        </p>
        <form onSubmit={sendEmail}>
          <div className="relative mb-5">
            <span className="absolute left-6 top-1/2 -translate-y-1/2">
              <svg
                width="16"
                height="12"
                viewBox="0 0 16 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.9998 0.399994H1.9998C1.1498 0.399994 0.424805 1.09999 0.424805 1.97499V10.075C0.424805 10.925 1.1248 11.65 1.9998 11.65H13.9998C14.8498 11.65 15.5748 10.95 15.5748 10.075V1.94999C15.5748 1.09999 14.8498 0.399994 13.9998 0.399994ZM13.9998 1.52499C14.0248 1.52499 14.0498 1.52499 14.0748 1.52499L7.9998 5.42499L1.9248 1.52499C1.9498 1.52499 1.9748 1.52499 1.9998 1.52499H13.9998ZM13.9998 10.475H1.9998C1.7498 10.475 1.5498 10.275 1.5498 10.025V2.62499L7.3998 6.37499C7.5748 6.49999 7.7748 6.54999 7.9748 6.54999C8.1748 6.54999 8.3748 6.49999 8.5498 6.37499L14.3998 2.62499V10.05C14.4498 10.3 14.2498 10.475 13.9998 10.475Z"
                  fill="#918EA0"
                />
              </svg>
            </span>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-white/[0.12] bg-transparent py-3.5 pl-14.5 pr-4 font-medium text-white outline-hidden focus:border-purple focus-visible:shadow-none"
            />
          </div>
          <button
            type="submit"
            className="hero-button-gradient flex w-full items-center justify-center rounded-lg px-7 py-3 font-medium text-white duration-300 ease-in hover:opacity-80"
          >
            Reset Password {loader && <Loader />}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ForgotPassword;
