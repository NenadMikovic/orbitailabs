"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import Loader from "@/components/Common/Loader";

const ResetPassword = ({ token }: { token: string }) => {
  const [data, setData] = useState({
    newPassword: "",
    ReNewPassword: "",
  });
  const [loader, setLoader] = useState(false);
  const [user, setUser] = useState({ email: "" });

  const router = useRouter();

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const res = await axios.post(`/api/forgot-password/verify-token`, {
          token,
        });

        if (res.status === 200) {
          setUser({ email: res.data.email });
        }
      } catch (error: any) {
        toast.error(error.response.data);
        router.push("/auth/forgot-password");
      }
    };

    verifyToken();
  }, [router, token]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (data.newPassword === "" || data.ReNewPassword === "") {
      toast.error("Please fill in both fields.");
      return;
    }

    if (data.newPassword !== data.ReNewPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    setLoader(true);

    try {
      const res = await axios.post(`/api/forgot-password/update`, {
        email: user.email,
        password: data.newPassword,
      });

      if (res.status === 200) {
        toast.success(res.data);
        setData({ newPassword: "", ReNewPassword: "" });
        router.push("/auth/signin");
      }

      setLoader(false);
    } catch (error: any) {
      toast.error(error.response.data);
      setLoader(false);
    }
  };

  return (
    <section className="flex items-center justify-center py-20">
      <div className="w-full max-w-md rounded-2xl bg-white/[0.05] p-8 sm:p-10">
        <h2 className="mb-6 text-center text-xl font-semibold text-white sm:text-2xl">
          Reset Your Password
        </h2>
        <p className="mb-6 text-center text-white/80">
          Enter your new password below to complete the reset process.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="relative mb-5">
            <input
              type="password"
              placeholder="New password"
              value={data.newPassword}
              onChange={handleChange}
              name="newPassword"
              className="w-full rounded-lg border border-white/[0.12] bg-transparent py-3.5 pl-4 pr-4 font-medium text-white outline-hidden focus:border-purple focus-visible:shadow-none"
            />
          </div>
          <div className="relative mb-5">
            <input
              type="password"
              placeholder="Re-enter new password"
              value={data.ReNewPassword}
              name="ReNewPassword"
              onChange={handleChange}
              className="w-full rounded-lg border border-white/[0.12] bg-transparent py-3.5 pl-4 pr-4 font-medium text-white outline-hidden focus:border-purple focus-visible:shadow-none"
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

export default ResetPassword;
