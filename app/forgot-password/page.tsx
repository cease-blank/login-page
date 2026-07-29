import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-[#0d1117] flex flex-col items-center justify-center p-4 font-sans relative">
      <div className="w-full max-w-[340px] flex flex-col items-center">
        {/* Heading */}
        <h1 className="text-2xl font-semibold text-[#e6edf3] mb-3 tracking-tight text-center">
          Reset your password
        </h1>

        {/* Subtitle */}
        <p className="text-sm text-[#8b949e] text-center mb-6 leading-relaxed">
          Enter your user account's verified email address and we will send you a password reset link.
        </p>

        {/* Form */}
        <form className="w-full space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-[#e6edf3] mb-1.5"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              className="w-full px-3 py-2.5 text-sm bg-[#0d1117] border border-[#30363d] rounded-md text-[#e6edf3] placeholder-[#6e7681] focus:outline-none focus:border-[#2f81f7] focus:ring-1 focus:ring-[#2f81f7] transition-colors"
              autoComplete="email"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2.5 px-3 text-sm font-medium text-white bg-[#238636] hover:bg-[#2ea043] border border-[rgba(46,160,67,0.4)] rounded-md transition-colors duration-200 cursor-pointer"
          >
            Send password reset email
          </button>
        </form>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 py-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs">
        <Link href="#" className="text-[#7d8590] hover:text-[#2f81f7] transition-colors">Terms</Link>
        <Link href="#" className="text-[#7d8590] hover:text-[#2f81f7] transition-colors">Privacy</Link>
        <Link href="#" className="text-[#7d8590] hover:text-[#2f81f7] transition-colors">Docs</Link>
        <Link href="#" className="text-[#7d8590] hover:text-[#2f81f7] transition-colors">Contact GitHub Support</Link>
        <Link href="#" className="text-[#7d8590] hover:text-[#2f81f7] transition-colors">Manage cookies</Link>
        <Link href="#" className="text-[#7d8590] hover:text-[#2f81f7] transition-colors">Do not share my personal information</Link>
      </div>
    </div>
  );
}