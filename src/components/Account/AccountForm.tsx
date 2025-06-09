"use client";
import { useState, useEffect } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import toast from "react-hot-toast";


export default function AccountForm() {
  const [form, setForm] = useState({ name: "", email: "", location: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/account/me")
      .then(res => res.json())
      .then(data => {
  setForm({
    name: data.name || "",
    email: data.email || "",
    location: data.location || "",
  });
});
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    setMessage("");
    const res = await fetch("/api/account/update", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setLoading(false);
    if (res.ok) {
      setMessage("Changes saved ✅");
    } else {
      setMessage(data.error || "Something went wrong.");
    }
  };

  const [passwords, setPasswords] = useState({
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
});
const [passwordLoading, setPasswordLoading] = useState(false);
const [passwordMessage, setPasswordMessage] = useState("");

const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setPasswords(prev => ({ ...prev, [e.target.name]: e.target.value }));
};

const handlePasswordSubmit = async () => {
  setPasswordLoading(true);
  setPasswordMessage("");

  if (passwords.newPassword !== passwords.confirmPassword) {
    setPasswordMessage("New passwords do not match.");
    setPasswordLoading(false);
    return;
  }

  const res = await fetch("/api/account/change-password", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(passwords),
  });

  const data = await res.json();
  setPasswordLoading(false);
  if (res.ok) {
    setPasswordMessage("Password updated successfully ✅");
    setPasswords({ currentPassword: "", newPassword: "", confirmPassword: "" });
  } else {
    setPasswordMessage(data.error || "Something went wrong.");
  }
};

const [deleting, setDeleting] = useState(false);

const handleDeleteAccount = async () => {
  if (!confirm("Are you sure you want to delete your account? This action is irreversible.")) return;

  setDeleting(true);

  const res = await fetch("/api/delete-account", { method: "DELETE" });

  if (res.ok) {
    toast.success("Account deleted successfully.");
    window.location.href = "/";
  } else {
    toast.error("Failed to delete account.");
  }

  setDeleting(false);
};


  return (
    <>
  <Breadcrumb pageTitle="Account" />

  {/* 🔐 Account Info Box */}
  <div className="max-w-xl mx-auto bg-transparent p-6 rounded-2xl border border-gray-700 shadow-md">
    <h2 className="text-xl font-semibold mb-6 text-white">Update Account</h2>

    <label className="block mb-4 text-sm text-gray-300">
      Name
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="John Doe"
        className="mt-1 w-full p-2 bg-gray-900 border border-gray-700 rounded-lg"
      />
    </label>

    <label className="block mb-4 text-sm text-gray-300">
      Email
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="john@example.com"
        className="mt-1 w-full p-2 bg-gray-900 border border-gray-700 rounded-lg"
      />
    </label>

    <label className="block mb-6 text-sm text-gray-300">
      Location
      <input
        type="text"
        name="location"
        value={form.location}
        onChange={handleChange}
        placeholder="United States"
        className="mt-1 w-full p-2 bg-gray-900 border border-gray-700 rounded-lg"
      />
    </label>

    <button
      onClick={handleSubmit}
      disabled={loading}
      className="hero-button-gradient inline-flex rounded-lg px-7 py-3 font-medium text-white duration-300 ease-in hover:opacity-80"
    >
      {loading ? "Saving..." : "Save Changes"}
    </button>

    {message && (
      <p className="mt-4 text-sm text-green-500 text-center">{message}</p>
    )}
  </div>

  {/* 🔑 Change Password Box */}
  <div className="max-w-xl mx-auto mt-8 bg-transparent p-6 rounded-2xl border border-gray-700 shadow-md">
    <h2 className="text-xl font-semibold mb-6 text-white">Change Password</h2>

    <label className="block mb-4 text-sm text-gray-300">
      Current Password
      <input
        type="password"
        name="currentPassword"
        value={passwords.currentPassword}
        onChange={handlePasswordChange}
        placeholder="••••••••"
        className="mt-1 w-full p-2 bg-gray-900 border border-gray-700 rounded-lg"
      />
    </label>

    <label className="block mb-4 text-sm text-gray-300">
      New Password
      <input
        type="password"
        name="newPassword"
        value={passwords.newPassword}
        onChange={handlePasswordChange}
        placeholder="At least 8 characters"
        className="mt-1 w-full p-2 bg-gray-900 border border-gray-700 rounded-lg"
      />
    </label>

    <label className="block mb-6 text-sm text-gray-300">
      Confirm New Password
      <input
        type="password"
        name="confirmPassword"
        value={passwords.confirmPassword}
        onChange={handlePasswordChange}
        placeholder="Re-type new password"
        className="mt-1 w-full p-2 bg-gray-900 border border-gray-700 rounded-lg"
      />
    </label>

    <button
      onClick={handlePasswordSubmit}
      disabled={passwordLoading}
      className="hero-button-gradient inline-flex rounded-lg px-7 py-3 font-medium text-white duration-300 ease-in hover:opacity-80"
    >
      {passwordLoading ? "Updating..." : "Update Password"}
    </button>

    {passwordMessage && (
      <p className="mt-4 text-sm text-green-500 text-center">{passwordMessage}</p>
    )}
  </div>

  {/* 🧨 Danger Zone */}
<div className="max-w-xl mx-auto mt-8 bg-transparent p-6 rounded-2xl border border-red-500 shadow-md">
  <h2 className="text-xl font-semibold mb-4 text-red-500">Danger Zone</h2>
  <p className="text-sm text-white/70 mb-4">
    Deleting your account is permanent and cannot be undone. All of your licenses and data will be lost.
  </p>
  <button
    onClick={handleDeleteAccount}
    disabled={deleting}
    className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-medium"
  >
    {deleting ? "Deleting..." : "Delete My Account"}
  </button>
</div>

</>


  );
}
