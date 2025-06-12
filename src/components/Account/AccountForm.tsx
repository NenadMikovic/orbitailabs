"use client";

import { useState } from 'react';
import Image from 'next/image';
import Breadcrumb from "@/components/Breadcrumb";

type Section = 'account' | 'licenses' | 'downloads' | 'guides' | 'support';

export default function AccountDashboard() {
  const [selected, setSelected] = useState<Section>('account');

  const menu = [
    { key: 'account', label: 'Account Settings' },
    { key: 'licenses', label: 'Licenses' },
    { key: 'downloads', label: 'Downloads' },
    { key: 'guides', label: 'How-to Guides' },
    { key: 'support', label: 'Troubleshooting' },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient from-[#1a002b] to-[#2c0145] flex flex-col">
  <Breadcrumb pageTitle="Dashboard" />
  
  <div className="flex-1 flex justify-center items-center p-4">
    <div className="w-full max-w-[1300px] h-[75vh] bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl flex overflow-hidden border border-white/10">
          {/* Sidebar */}
         <aside className="w-56 border-r border-white/10 flex flex-col justify-center py-10 bg-white/5 backdrop-blur-md">
  <nav className="flex flex-col space-y-4 px-4">
    {/* My Profile */}
    <div
      onClick={() => setSelected('account')}
      className={`flex items-center space-x-3 text-white cursor-pointer px-3 py-2 rounded-md transition ${
        selected === 'account' ? 'bg-[#9D00FF]/20' : 'hover:bg-[#9D00FF]/20'
      }`}
    >
      <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M5.121 17.804A8 8 0 1118.88 6.196a8 8 0 01-13.757 11.608z" />
        <path d="M12 12v.01" />
        <path d="M12 16h.01" />
      </svg>
      <span className="text-sm">My Profile</span>
    </div>

    {/* Manage Licenses */}
    <div
      onClick={() => setSelected('licenses')}
      className={`flex items-center space-x-3 text-white cursor-pointer px-3 py-2 rounded-md transition ${
        selected === 'licenses' ? 'bg-[#9D00FF]/20' : 'hover:bg-[#9D00FF]/20'
      }`}
    >
      <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M9 12l2 2 4-4" />
        <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span className="text-sm">Manage Licenses</span>
    </div>

    {/* Downloads */}
    <div
      onClick={() => setSelected('downloads')}
      className={`flex items-center space-x-3 text-white cursor-pointer px-3 py-2 rounded-md transition ${
        selected === 'downloads' ? 'bg-[#9D00FF]/20' : 'hover:bg-[#9D00FF]/20'
      }`}
    >
      <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M4 4v16h16V4H4zm4 4h8v8H8V8z" />
      </svg>
      <span className="text-sm">Downloads</span>
    </div>

    {/* Setup Guides */}
    <div
      onClick={() => setSelected('guides')}
      className={`flex items-center space-x-3 text-white cursor-pointer px-3 py-2 rounded-md transition ${
        selected === 'guides' ? 'bg-[#9D00FF]/20' : 'hover:bg-[#9D00FF]/20'
      }`}
    >
      <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M12 20l9-5-9-5-9 5 9 5z" />
        <path d="M12 12V4l9 5-9 5-9-5z" />
      </svg>
      <span className="text-sm">Setup Guides</span>
    </div>

    {/* Help & Support */}
    <div
      onClick={() => setSelected('support')}
      className={`flex items-center space-x-3 text-white cursor-pointer px-3 py-2 rounded-md transition ${
        selected === 'support' ? 'bg-[#9D00FF]/20' : 'hover:bg-[#9D00FF]/20'
      }`}
    >
      <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M12 8v4l3 3" />
        <circle cx="12" cy="12" r="10" />
      </svg>
      <span className="text-sm">Help & Support</span>
    </div>
  </nav>
</aside>
          {/* Main Content */}
          <main className="flex-1 px-8 py-6 overflow-y-auto">
            <header className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-bold text-white">Welcome, Amanda</h2>
                <p className="text-sm text-purple-300">Tue, 07 June 2022</p>
              </div>
              <div className="flex items-center space-x-4">
                <input
                  type="text"
                  placeholder="Search"
                  className="px-4 py-1.5 bg-white/10 border border-white/20 rounded-md text-sm text-white placeholder-purple-300 outline-none"
                />
                <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20">
                  <Image src="/images/team/team-09.png" alt="User" width={32} height={32} />
                </div>
              </div>
            </header>

            {/* Section Content */}
{selected === 'account' && (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

    {/* Profile Overview */}
    <div className="bg-white/10 border border-white/10 rounded-xl p-6 shadow-md col-span-1">
      <div className="flex items-center space-x-4 mb-4">
        <Image
          src="/images/team/team-09.png"
          alt="Alexa Rawles"
          width={64}
          height={64}
          className="rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold text-white">Alexa Rawles</h3>
          <p className="text-sm text-purple-300">alexarawles@gmail.com</p>
        </div>
        <button className="ml-auto bg-[#9D00FF] hover:bg-[#00C2FF] transition text-white px-4 py-2 rounded-md text-sm font-medium">
          Update Profile
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <div>
          <label className="text-sm text-purple-300">Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="mt-1 w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 text-sm text-white placeholder-purple-400"
          />
        </div>
        <div>
          <label className="text-sm text-purple-300">Country</label>
          <input
            type="text"
            placeholder="Enter your country"
            className="mt-1 w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 text-sm text-white placeholder-purple-400"
          />
        </div>
      </div>
    </div>

    {/* Account Details */}
    <div className="bg-white/10 border border-white/10 rounded-xl p-6 shadow-md col-span-1">
      <div className="grid grid-cols-1 gap-4">
        <div>
          <label className="text-sm text-purple-300">Account Created</label>
          <p className="mt-1 px-4 py-2 bg-white/5 border border-white/10 rounded-md text-sm text-white">May 2024</p>
        </div>
        <div>
          <label className="text-sm text-purple-300">Account Status</label><br />
          <span className="inline-block mt-1 px-3 py-1 bg-green-500/20 text-green-300 border border-green-500/30 rounded-md text-xs font-medium">Active</span>
        </div>
        <div>
          <label className="text-sm text-purple-300">Preferred Platform</label>
          <select className="mt-1 w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 text-sm text-white">
            <option className="text-black">MT4</option>
            <option className="text-black">MT5</option>
          </select>
        </div>
        <div>
          <label className="text-sm text-purple-300">Valid until</label>
          <p className="mt-1 px-4 py-2 bg-white/5 border border-white/10 rounded-md text-sm text-white">Today at 09:32 AM</p>
        </div>
      </div>
    </div>

    {/* Plan & Security */}
    <div className="bg-white/10 border border-white/10 rounded-xl p-6 shadow-md col-span-1">
      <div className="grid grid-cols-1 gap-4">
        <div>
          <label className="text-sm text-purple-300">Plan Tier</label><br />
          <span className="inline-block mt-1 px-3 py-1 bg-purple-500/20 text-purple-300 border border-purple-500/30 rounded-md text-xs font-medium">Pro</span>
          <button className="ml-4 bg-[#9D00FF] hover:bg-[#00C2FF] transition text-white px-3 py-1 rounded-md text-sm font-medium">
            Upgrade Plan
          </button>
        </div>
        <div>
          <label className="text-sm text-purple-300">Change Password</label>
          <button className="mt-1 w-full bg-[#9D00FF] hover:bg-[#00C2FF] transition text-white px-4 py-2 rounded-md text-sm font-medium">
            Update Password
          </button>
        </div>
      </div>
    </div>

    {/* Danger Zone */}
    <div className="bg-white/10 border border-red-600/40 rounded-xl p-6 shadow-md col-span-1">
      <label className="text-sm text-purple-300">Danger Zone</label>
      <button className="mt-2 w-full bg-red-600 hover:bg-red-700 transition text-white px-4 py-2 rounded-md text-sm font-medium">
        Delete My Account
      </button>
    </div>

    {/* Email Info */}
    <div className="col-span-1 lg:col-span-2 mt-4">
      <h4 className="font-semibold text-white mb-2">Your email address</h4>
      <div className="flex items-center justify-between p-4 border border-white/10 rounded-md bg-white/5">
        <div className="flex items-center space-x-3">
          <span className="text-[#00C2FF] text-xl">📧</span>
          <div>
            <p className="text-sm font-medium text-white">alexarawles@gmail.com</p>
            <p className="text-xs text-purple-400">Verified</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)}

{selected === 'licenses' && (
  <div className="bg-white/10 border border-white/10 rounded-xl p-6 shadow-md text-white">
    <h3 className="text-xl font-semibold mb-4">Manage Licenses</h3>
    <p>This section will show your active licenses, expiration, and upgrade options.</p>
  </div>
)}

{selected === 'downloads' && (
  <div className="bg-white/10 border border-white/10 rounded-xl p-6 shadow-md text-white">
    <h3 className="text-xl font-semibold mb-4">Downloads</h3>
    <p>Here you&apos;ll find all available Stellaris bot downloads for MT4 and MT5.</p>
  </div>
)}

{selected === 'guides' && (
  <div className="bg-white/10 border border-white/10 rounded-xl p-6 shadow-md text-white">
    <h3 className="text-xl font-semibold mb-4">Setup Guides</h3>
    <p>Choose your bot to view the step-by-step installation guide.</p>
  </div>
)}

{selected === 'support' && (
  <div className="bg-white/10 border border-white/10 rounded-xl p-6 shadow-md text-white">
    <h3 className="text-xl font-semibold mb-4">Help & Support</h3>
    <p>Find answers to common questions or get in touch with our support team.</p>
  </div>
)}

          </main>
        </div>
      </div>
      </div>
    </>
  );
}
