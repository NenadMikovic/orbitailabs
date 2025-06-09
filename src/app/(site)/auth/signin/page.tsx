import { Suspense } from "react";
import Signin from "@/components/Auth/SignIn";
import Breadcrumb from "@/components/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign in | OrbitAI Labs",
  description: "This is Sign in page for AI Tool",
};

const SigninPage = () => {
  return (
    <>
      <Breadcrumb pageTitle="Sign in" />
      <Suspense fallback={<div>Loading...</div>}>
        <Signin />
      </Suspense>
    </>
  );
};

export default SigninPage;
