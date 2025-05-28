"use client";
import { useState, useEffect } from "react";

export default function AccountForm() {
  const [form, setForm] = useState({ name: "", email: "", location: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/account/me")
      .then(res => res.json())
      .then(data => setForm(data));
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

  return (
    <>
      <label className="block mb-2">
        Name
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-900 border border-gray-700"
        />
      </label>

      <label className="block mb-2">
        Email
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-900 border border-gray-700"
        />
      </label>

      <label className="block mb-4">
        Location
        <input
          type="text"
          name="location"
          value={form.location}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-900 border border-gray-700"
        />
      </label>

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        {loading ? "Saving..." : "Save Changes"}
      </button>

      {message && <p className="mt-3 text-sm text-green-500">{message}</p>}
    </>
  );
}
