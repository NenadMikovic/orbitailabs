"use client";

import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { useState } from "react";
import toast from "react-hot-toast";

const Support = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setLoading(true);

  const form = e.currentTarget;
  const formData = new FormData(form);

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  try {
    const res = await fetch("/api/support", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (!res.ok) throw new Error("Failed to send");

    toast.success("Support request sent successfully!");
    form.reset(); // clear the form
  } catch (err) {
    console.error(err);
    toast.error("Something went wrong. Try again later.");
  } finally {
    setLoading(false);
  }
};



  return (
    <section id="support" className="scroll-mt-17">
      <div className="mx-auto max-w-[1104px] px-4 sm:px-8 xl:px-0">
        <div className="relative z-999 overflow-hidden rounded-[30px] bg-dark px-4 pt-25 sm:px-20 lg:px-27.5">
          <div className="absolute -top-[16%] left-1/2 -z-1 flex w-full max-w-[690px] -translate-x-1/2 justify-center gap-7.5 opacity-40">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className={`pricing-grid pricing-grid-border relative h-[250px] w-full max-w-[50px] bottom-${[12, 7, 3, 0, 0, 0, 2, 5, 8][i]}`}
              ></div>
            ))}
          </div>

          <div className="absolute -top-30 left-1/2 -z-1 h-60 w-full max-w-[482px] -translate-x-1/2 overflow-hidden">
            <div className="stars"></div>
            <div className="stars2"></div>
          </div>

          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <span className="absolute left-1/2 top-0 -z-1 h-full w-full -translate-x-1/2 bg-[url(/images/blur/blur-19.svg)] bg-cover bg-center bg-no-repeat"></span>
            <span className="absolute left-1/2 top-0 -z-1 aspect-1170/592 w-full -translate-x-1/2">
              <Image src="/images/blur/blur-20.svg" alt="blur-sm" fill className="max-w-none" />
            </span>
            <span className="absolute left-1/2 top-0 -z-1 mx-auto aspect-530/254 w-full max-w-[530px] -translate-x-1/2">
              <Image src="/images/blur/blur-21.svg" alt="blur-sm" fill className="max-w-none" />
            </span>
          </div>

          <SectionTitle
            subTitle="Need Assistance?"
            title="Submit a Support Request"
            paragraph="If you need personalized help or have a question our AI assistant can't answer, our team is here for you. Just submit a ticket and we’ll get back to you shortly. We are also available at support@orbitailabs.com"
          />

          <div className="form-box-gradient relative overflow-hidden rounded-[25px] p-6 sm:p-8 xl:p-15">
            <form onSubmit={handleSubmit} className="relative z-10">
              <div className="-mx-4 flex flex-wrap xl:-mx-10">
                <div className="w-full px-4 md:w-1/2 xl:px-5">
                  <div className="mb-9.5">
                    <label htmlFor="name" className="mb-2.5 block font-medium text-white">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      required
                      className="w-full rounded-lg border border-white/[0.12] bg-white/[0.05] px-6 py-3 text-white outline-hidden focus:border-purple"
                    />
                  </div>
                </div>

                <div className="w-full px-4 md:w-1/2 xl:px-5">
                  <div className="mb-9.5">
                    <label htmlFor="email" className="mb-2.5 block font-medium text-white">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Enter your email address"
                      required
                      className="w-full rounded-lg border border-white/[0.12] bg-white/[0.05] px-6 py-3 text-white outline-hidden focus:border-purple"
                    />
                  </div>
                </div>

                <div className="w-full px-4 xl:px-5">
                  <div className="mb-10">
                    <label htmlFor="message" className="mb-2.5 block font-medium text-white">
                      Leave us a message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Type your question or issue here..."
                      rows={6}
                      required
                      className="w-full rounded-lg border border-white/[0.12] bg-white/[0.05] px-6 py-5 outline-hidden focus:border-purple"
                    />
                  </div>
                </div>

                <div className="w-full px-4 xl:px-5">
                  <div className="text-center">
                    <button
                      type="submit"
                      className="hero-button-gradient inline-flex rounded-lg px-7 py-3 font-medium text-white duration-300 ease-in hover:opacity-80"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Submit Request"}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
