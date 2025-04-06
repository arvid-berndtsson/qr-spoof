import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import Search from "./Search";

export default function Header() {
  const router = useRouter();
  const currentPath = router.pathname;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown and mobile menu on route change
  useEffect(() => {
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  }, [currentPath]);

  const isActive = (path: string) => {
    return currentPath === path;
  };

  return (
    <header className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl font-semibold text-[#29a587] tracking-tight"
            >
              QR Spoof
            </Link>
          </div>
          <nav className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive("/")
                  ? "text-[#29a587]"
                  : "text-gray-600 hover:text-[#29a587]"
              }`}
            >
              Home
            </Link>
            <Link
              href="/generate"
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive("/generate")
                  ? "text-[#29a587]"
                  : "text-gray-600 hover:text-[#29a587]"
              }`}
            >
              Generate
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive("/about")
                  ? "text-[#29a587]"
                  : "text-gray-600 hover:text-[#29a587]"
              }`}
            >
              About
            </Link>
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`flex items-center text-sm font-medium transition-colors duration-200 ${
                  isDropdownOpen ||
                  currentPath.startsWith("/what-is-quishing") ||
                  currentPath.startsWith("/how-to-scan-qr-codes-safely") ||
                  currentPath.startsWith("/what-is-a-qr-code") ||
                  currentPath.startsWith("/technical-details")
                    ? "text-[#29a587]"
                    : "text-gray-600 hover:text-[#29a587]"
                }`}
              >
                FAQ
                <svg
                  className={`ml-1.5 h-3.5 w-3.5 transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10 overflow-hidden">
                  <div className="py-1">
                    <Link
                      href="/what-is-a-qr-code"
                      className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                        currentPath === "/what-is-a-qr-code"
                          ? "bg-gray-50 text-[#29a587]"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      What is a QR Code?
                    </Link>
                    <Link
                      href="/what-is-quishing"
                      className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                        currentPath === "/what-is-quishing"
                          ? "bg-gray-50 text-[#29a587]"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      What is Quishing?
                    </Link>
                    <Link
                      href="/how-to-scan-qr-codes-safely"
                      className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                        currentPath === "/how-to-scan-qr-codes-safely"
                          ? "bg-gray-50 text-[#29a587]"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      How to Scan QR Codes Safely
                    </Link>
                    <Link
                      href="/technical-details"
                      className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                        currentPath === "/technical-details"
                          ? "bg-gray-50 text-[#29a587]"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      Technical Details
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </nav>
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-[#29a587] focus:outline-none"
            >
              <span className="sr-only">Open menu</span>
              <svg
                className={`${isMobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <div className="w-64">
              <Search />
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`${isMobileMenuOpen ? "block" : "hidden"} sm:hidden`}>
        <div className="pt-2 pb-3 space-y-1">
          <div className="px-4 py-2">
            <Search />
          </div>
          <Link
            href="/"
            className={`block px-3 py-2 text-base font-medium ${
              currentPath === "/"
                ? "bg-gray-50 text-[#29a587]"
                : "text-gray-600 hover:bg-gray-50 hover:text-[#29a587]"
            }`}
          >
            Home
          </Link>
          <Link
            href="/generate"
            className={`block px-3 py-2 text-base font-medium ${
              currentPath === "/generate"
                ? "bg-gray-50 text-[#29a587]"
                : "text-gray-600 hover:bg-gray-50 hover:text-[#29a587]"
            }`}
          >
            Generate
          </Link>
          <Link
            href="/about"
            className={`block px-3 py-2 text-base font-medium ${
              currentPath === "/about"
                ? "bg-gray-50 text-[#29a587]"
                : "text-gray-600 hover:bg-gray-50 hover:text-[#29a587]"
            }`}
          >
            About
          </Link>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="px-3">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                FAQ
              </div>
              <div className="mt-2 space-y-1">
                <Link
                  href="/what-is-a-qr-code"
                  className={`block px-3 py-2 text-base font-medium ${
                    currentPath === "/what-is-a-qr-code"
                      ? "bg-gray-50 text-[#29a587]"
                      : "text-gray-600 hover:bg-gray-50 hover:text-[#29a587]"
                  }`}
                >
                  What is a QR Code?
                </Link>
                <Link
                  href="/what-is-quishing"
                  className={`block px-3 py-2 text-base font-medium ${
                    currentPath === "/what-is-quishing"
                      ? "bg-gray-50 text-[#29a587]"
                      : "text-gray-600 hover:bg-gray-50 hover:text-[#29a587]"
                  }`}
                >
                  What is Quishing?
                </Link>
                <Link
                  href="/how-to-scan-qr-codes-safely"
                  className={`block px-3 py-2 text-base font-medium ${
                    currentPath === "/how-to-scan-qr-codes-safely"
                      ? "bg-gray-50 text-[#29a587]"
                      : "text-gray-600 hover:bg-gray-50 hover:text-[#29a587]"
                  }`}
                >
                  How to Scan QR Codes Safely
                </Link>
                <Link
                  href="/technical-details"
                  className={`block px-3 py-2 text-base font-medium ${
                    currentPath === "/technical-details"
                      ? "bg-gray-50 text-[#29a587]"
                      : "text-gray-600 hover:bg-gray-50 hover:text-[#29a587]"
                  }`}
                >
                  Technical Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
