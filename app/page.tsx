"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const validateEmail = (value: string) => {
    if (!value.trim()) {
      return "Username or email address is required";
    }
    if (value.includes("@")) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return "Please enter a valid email address";
      }
    }
    return "";
  };

  const validatePassword = (value: string) => {
    if (!value) {
      return "Password is required";
    }
    if (value.length < 8) {
      return "Password must be at least 8 characters";
    }
    return "";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    
    setErrors({
      email: emailError,
      password: passwordError,
    });

    if (!emailError && !passwordError) {
      alert("Login submitted!");
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (errors.email) {
      setErrors((prev) => ({ ...prev, email: undefined }));
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (errors.password) {
      setErrors((prev) => ({ ...prev, password: undefined }));
    }
  };

  const inputErrorClass = "border-[#cf222e] focus:border-[#cf222e] focus:ring-[#cf222e]";
  const inputNormalClass = "border-[#30363d] focus:border-[#2f81f7] focus:ring-[#2f81f7]";

  return (
    <div className="min-h-screen bg-[#0d1117] flex flex-col items-center justify-center p-4 font-sans">
      {/* Logo */}
      <div className="mb-6">
        <svg
          height="48"
          aria-hidden="true"
          viewBox="0 0 16 16"
          version="1.1"
          width="48"
          fill="currentColor"
          className="text-white"
        >
          <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
        </svg>
      </div>

      {/* Heading */}
      <h1 className="text-2xl font-light text-[#e6edf3] mb-6 tracking-tight">
        Sign in to GitHub
      </h1>

      {/* Form Container */}
      <div className="w-full max-w-[340px]">
        <form className="space-y-4" onSubmit={handleSubmit} noValidate>
          {/* Username / Email */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-semibold text-[#e6edf3] mb-2"
            >
              Username or email address
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={email}
              onChange={handleEmailChange}
              onBlur={() => setErrors((prev) => ({ ...prev, email: validateEmail(email) }))}
              className={`w-full px-3 py-2.5 text-sm bg-[#0d1117] border rounded-md text-[#e6edf3] placeholder-[#6e7681] focus:outline-none focus:ring-1 transition-colors ${
                errors.email ? inputErrorClass : inputNormalClass
              }`}
              autoComplete="username"
            />
            {errors.email && (
              <p className="mt-1.5 text-xs text-[#cf222e]">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label
                htmlFor="password"
                className="text-sm font-semibold text-[#e6edf3]"
              >
                Password
              </label>
              <Link
                href="/forgot-password"
                className="text-sm text-[#2f81f7] hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              onBlur={() => setErrors((prev) => ({ ...prev, password: validatePassword(password) }))}
              className={`w-full px-3 py-2.5 text-sm bg-[#0d1117] border rounded-md text-[#e6edf3] placeholder-[#6e7681] focus:outline-none focus:ring-1 transition-colors ${
                errors.password ? inputErrorClass : inputNormalClass
              }`}
              autoComplete="current-password"
            />
            {errors.password && (
              <p className="mt-1.5 text-xs text-[#cf222e]">{errors.password}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2.5 px-3 text-sm font-medium text-white bg-[#238636] hover:bg-[#2ea043] border border-[rgba(46,160,67,0.4)] rounded-md transition-colors duration-200 cursor-pointer"
          >
            Sign in
          </button>
        </form>

        {/* Divider */}
        <div className="relative py-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#30363d]" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-[#0d1117] px-3 text-[#8b949e]">or</span>
          </div>
        </div>

        {/* Social Buttons */}
        <div className="space-y-3">
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 py-2.5 px-3 text-sm font-medium text-[#e6edf3] bg-[#21262d] hover:bg-[#30363d] border border-[#30363d] rounded-md transition-colors cursor-pointer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Continue with Google
          </button>

          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 py-2.5 px-3 text-sm font-medium text-[#e6edf3] bg-[#21262d] hover:bg-[#30363d] border border-[#30363d] rounded-md transition-colors cursor-pointer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white">
              <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
            </svg>
            Continue with Apple
          </button>
        </div>

        {/* New to GitHub */}
        <div className="mt-6 text-center">
          <p className="text-sm text-[#e6edf3]">
            New to GitHub?{" "}
            <Link href="/signup" className="text-[#2f81f7] hover:underline">
              Create an account
            </Link>
          </p>
        </div>

        {/* Passkey */}
        <div className="mt-4 text-center">
          <Link
            href="#"
            className="text-sm text-[#2f81f7] hover:underline"
          >
            Sign in with a passkey
          </Link>
        </div>
      </div>
    </div>
  );
}