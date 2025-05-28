
import { useState } from "react";
import { useSession } from "next-auth/react";
import AccountClient from "./AccountClient";

export default function AccountPage() {
  return <AccountClient />;
}
