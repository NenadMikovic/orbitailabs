import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/auth";
import { redirect } from "next/navigation";
import AccountForm from "@/components/Account/AccountForm";



export default async function AccountPage() {
  const session = await getServerSession(authOptions);

  if (!session && process.env.NODE_ENV === "production") {
    redirect("/auth/signin");
  }

  

  return (
    <>
      <AccountForm />
    </>
  );
}
