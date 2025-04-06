import Link from "next/link";
import { useRouter } from "next/router";

export default function Navigation() {
  const router = useRouter();
  const currentPath = router.pathname;

  const isActive = (path: string) => {
    return currentPath === path;
  };

  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link
              href="/"
              className={`flex items-center px-3 py-2 text-sm font-medium ${
                isActive("/")
                  ? "text-[#29a587] border-b-2 border-[#29a587]"
                  : "text-gray-500 hover:text-[#29a587] hover:border-b-2 hover:border-[#29a587]"
              }`}
            >
              Home
            </Link>
            <Link
              href="/generate"
              className={`flex items-center px-3 py-2 text-sm font-medium ${
                isActive("/generate")
                  ? "text-[#29a587] border-b-2 border-[#29a587]"
                  : "text-gray-500 hover:text-[#29a587] hover:border-b-2 hover:border-[#29a587]"
              }`}
            >
              Generate
            </Link>
            <Link
              href="/about"
              className={`flex items-center px-3 py-2 text-sm font-medium ${
                isActive("/about")
                  ? "text-[#29a587] border-b-2 border-[#29a587]"
                  : "text-gray-500 hover:text-[#29a587] hover:border-b-2 hover:border-[#29a587]"
              }`}
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
