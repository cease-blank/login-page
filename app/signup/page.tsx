"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const features = [
  {
    title: "Access to GitHub Copilot",
    desc: "Increase your productivity and accelerate software development.",
  },
  {
    title: "Unlimited repositories",
    desc: "Collaborate securely on public and private projects.",
  },
  {
    title: "Integrated code reviews",
    desc: "Boost code quality with built-in review tools.",
  },
  {
    title: "Automated workflows",
    desc: "Save time with CI/CD integrations and GitHub Actions.",
  },
  {
    title: "Community support",
    desc: "Connect with developers worldwide for instant feedback and insights.",
  },
];

export default function SignupPage() {
  const [showFeatures, setShowFeatures] = useState(false);

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row font-sans">
      {/* LEFT PANEL */}
      <div
        className="hidden md:flex md:w-1/2 flex-col relative overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #010409 0%, #0d1117 40%, #1a144f 80%, #312e81 100%)",
        }}
      >
        {/* Stars */}
        <div className="absolute inset-0 opacity-60">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: Math.random() > 0.5 ? "4px" : "3px",
                height: Math.random() > 0.5 ? "4px" : "3px",
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.3,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 px-12 pt-16 flex flex-col h-full">
          <h2 className="text-3xl font-semibold text-white mb-3">
            Create your free account
          </h2>
          <p className="text-[#8b949e] text-sm mb-4">
            Explore GitHub's core features for individuals and organizations.
          </p>

          {/* Toggle Button */}
          <button
            onClick={() => setShowFeatures(!showFeatures)}
            className="flex items-center gap-1.5 text-sm text-white hover:underline cursor-pointer bg-transparent border-none p-0 w-fit mb-4"
          >
            See what's included
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className={`transition-transform duration-200 mt-0.5 ${
                showFeatures ? "rotate-180" : ""
              }`}
            >
              <path d="M6 8L2 4h8L6 8z" fill="currentColor" />
            </svg>
          </button>

          {/* Features List */}
          <div
            className={`space-y-4 mb-4 transition-all duration-300 ${
              showFeatures ? "block" : "hidden"
            }`}
          >
            {features.map((feature, i) => (
              <div key={i} className="flex gap-3">
                <svg
                  className="w-4 h-4 text-white mt-0.5 flex-shrink-0"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {feature.title}
                  </p>
                  <p className="text-xs text-[#8b949e] mt-0.5 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Image — pushed to bottom */}
          <div className="mt-auto flex items-end justify-center pb-16">
            <Image
              src="/signup-characters.png"
              alt="GitHub Characters"
              width={400}
              height={400}
              className="w-[320px] h-auto object-contain"
              style={{
                filter: "drop-shadow(0 20px 60px rgba(124,58,237,0.4))",
              }}
              priority
            />
          </div>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="w-full md:w-1/2 bg-white flex flex-col items-center justify-start pt-8 pb-12 px-6 overflow-y-auto">
        {/* Top right link */}
        <div className="w-full max-w-[400px] flex justify-end mb-8">
          <p className="text-xs text-[#24292f]">
            Already have an account?{" "}
            <Link href="/login" className="text-[#0969da] hover:underline">
              Sign in →
            </Link>
          </p>
        </div>

        {/* Form */}
        <div className="w-full max-w-[400px]">
          <h1 className="text-2xl font-semibold text-[#1f2328] mb-6">
            Sign up for GitHub
          </h1>

          <form className="space-y-4">
            {/* Google */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 py-2 px-3 text-sm font-medium text-[#24292f] bg-white border border-[#d1d5da] rounded-md hover:bg-[#f6f8fa] transition-colors cursor-pointer"
            >
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </button>

            {/* Apple */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 py-2 px-3 text-sm font-medium text-[#24292f] bg-white border border-[#d1d5da] rounded-md hover:bg-[#f6f8fa] transition-colors cursor-pointer"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
              </svg>
              Continue with Apple
            </button>

            {/* Divider */}
            <div className="relative py-1">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#d1d5da]" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-white px-2 text-[#656d76]">or</span>
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-[#1f2328] mb-1.5">
                Email<span className="text-[#cf222e] ml-0.5">*</span>
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 text-sm bg-white border border-[#d1d5da] rounded-md text-[#1f2328] placeholder-[#6e7781] focus:outline-none focus:border-[#0969da] focus:ring-1 focus:ring-[#0969da] transition-colors"
                placeholder="Email"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-[#1f2328] mb-1.5">
                Password<span className="text-[#cf222e] ml-0.5">*</span>
              </label>
              <input
                type="password"
                className="w-full px-3 py-2 text-sm bg-white border border-[#d1d5da] rounded-md text-[#1f2328] placeholder-[#6e7781] focus:outline-none focus:border-[#0969da] focus:ring-1 focus:ring-[#0969da] transition-colors"
                placeholder="Password"
              />
              <p className="mt-1.5 text-xs text-[#656d76] leading-relaxed">
                Password should be at least 15 characters OR at least 8
                characters including a number and a lowercase letter.
              </p>
            </div>

            {/* Username */}
            <div>
              <label className="block text-sm font-semibold text-[#1f2328] mb-1.5">
                Username<span className="text-[#cf222e] ml-0.5">*</span>
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 text-sm bg-white border border-[#d1d5da] rounded-md text-[#1f2328] placeholder-[#6e7781] focus:outline-none focus:border-[#0969da] focus:ring-1 focus:ring-[#0969da] transition-colors"
                placeholder="Username"
              />
              <p className="mt-1.5 text-xs text-[#656d76] leading-relaxed">
                Username may only contain alphanumeric characters or single
                hyphens, and cannot begin or end with a hyphen.
              </p>
            </div>

            {/* Country */}
            <div>
              <label className="block text-sm font-semibold text-[#1f2328] mb-1.5">
                Your Country/Region
                <span className="text-[#cf222e] ml-0.5">*</span>
              </label>
              <div className="relative">
                <select className="w-full px-3 py-2 text-sm bg-white border border-[#d1d5da] rounded-md text-[#1f2328] focus:outline-none focus:border-[#0969da] focus:ring-1 focus:ring-[#0969da] transition-colors appearance-none cursor-pointer">
                  <option>Nepal</option>
                  <option>United States</option>
                  <option>India</option>
                  <option>United Kingdom</option>
                  <option>Canada</option>
                  <option>Germany</option>
                  <option>France</option>
                  <option>Australia</option>
                  <option>Italy</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#656d76]">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="currentColor"
                  >
                    <path d="M6 8L1 3h10z" />
                  </svg>
                </div>
              </div>
              <p className="mt-1.5 text-xs text-[#656d76] leading-relaxed">
                For compliance reasons, we're required to collect country
                information to send you occasional updates and announcements.
              </p>
            </div>

            {/* GitHub Copilot */}
            <div>
              <p className="text-sm font-semibold text-[#1f2328] mb-2">
                GitHub Copilot
              </p>
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="mt-0.5 w-4 h-4 rounded border-[#d1d5da] text-[#0969da] focus:ring-[#0969da] cursor-pointer"
                />
                <span className="text-xs text-[#656d76] leading-relaxed">
                  Sign up for Copilot Free for coding assistance on the web, in
                  the IDE, and in the CLI.{" "}
                  <Link href="#" className="text-[#0969da] hover:underline">
                    See terms
                  </Link>
                </span>
              </label>
            </div>

            {/* Email Preferences */}
            <div>
              <p className="text-sm font-semibold text-[#1f2328] mb-2">
                Email preferences
              </p>
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="mt-0.5 w-4 h-4 rounded border-[#d1d5da] text-[#0969da] focus:ring-[#0969da] cursor-pointer"
                />
                <span className="text-xs text-[#656d76] leading-relaxed">
                  Receive occasional product updates and announcements
                </span>
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-2.5 px-3 text-sm font-medium text-white bg-[#1a7f37] hover:bg-[#1f8f3f] rounded-md transition-colors duration-200 cursor-pointer flex items-center justify-center gap-1"
            >
              Create account <span className="text-lg leading-none">›</span>
            </button>

            {/* Terms */}
            <p className="text-xs text-[#656d76] leading-relaxed">
              By creating an account, you agree to the{" "}
              <Link href="#" className="text-[#0969da] hover:underline">
                Terms of Service
              </Link>
              . For more information about GitHub's privacy practices, see the{" "}
              <Link href="#" className="text-[#0969da] hover:underline">
                GitHub Privacy Statement
              </Link>
              . We'll occasionally send you account-related emails.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}