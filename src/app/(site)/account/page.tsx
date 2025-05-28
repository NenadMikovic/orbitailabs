import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/auth";
import { redirect } from "next/navigation";
import AccountForm from "@/components/Account/AccountForm";



export default async function AccountPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth/signin");
  }

  return (
    <div className="max-w-md mx-auto p-4 text-white">
      <h1 className="text-2xl font-bold mb-4">Account Settings</h1>
      <AccountForm />
    </div>
  );
}
