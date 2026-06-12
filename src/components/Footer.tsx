export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-lg font-bold text-white">
            SOD<span className="text-amber-400">.</span>
          </span>
          <p className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} SOD Fintech Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
