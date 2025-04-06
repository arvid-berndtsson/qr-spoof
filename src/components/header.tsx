import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const currentPath = router.pathname;

  const isActive = (path: string) => {
    return currentPath === path;
  };

  return (
    <header className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold text-[#29a587]">
                QR Spoof
              </Link>
            </div>
            <nav className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive("/")
                    ? "border-[#29a587] text-gray-900"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                }`}
              >
                Home
              </Link>
              <Link
                href="/generate"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive("/generate")
                    ? "border-[#29a587] text-gray-900"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                }`}
              >
                Generate
              </Link>
              <Link
                href="/about"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive("/about")
                    ? "border-[#29a587] text-gray-900"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                }`}
              >
                About
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
