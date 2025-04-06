import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const pages = [
  { title: "What is a QR Code?", path: "/what-is-a-qr-code" },
  { title: "What is Quishing?", path: "/what-is-quishing" },
  {
    title: "How to Scan QR Codes Safely",
    path: "/how-to-scan-qr-codes-safely",
  },
  { title: "Technical Details", path: "/technical-details" },
  { title: "Generate QR Code", path: "/generate" },
  { title: "About", path: "/about" },
  { title: "Terms of Use", path: "/terms" },
  { title: "Privacy Policy", path: "/privacy" },
];

export default function Search() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredPages = pages.filter((page) =>
    page.title.toLowerCase().includes(query.toLowerCase()),
  );

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      // Ctrl/Cmd + K to focus search
      if ((event.ctrlKey || event.metaKey) && event.key === "k") {
        event.preventDefault();
        inputRef.current?.focus();
      }
      // Escape to close dropdown
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="relative" ref={searchRef}>
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search... (Ctrl/Cmd + K)"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          className="w-full px-4 py-2 pl-10 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#29a587] focus:border-transparent"
        />
        <svg
          className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {isOpen && query && (
        <div className="absolute right-0 mt-2 w-full bg-white rounded-md shadow-lg z-50">
          <div className="py-1">
            {filteredPages.length > 0 ? (
              filteredPages.map((page) => (
                <Link
                  key={page.path}
                  href={page.path}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => {
                    setQuery("");
                    setIsOpen(false);
                  }}
                >
                  {page.title}
                </Link>
              ))
            ) : (
              <div className="px-4 py-2 text-sm text-gray-500">
                No results found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
