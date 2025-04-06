import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-6">
            <Link
              href="/terms"
              className="text-sm text-gray-500 hover:text-[#29a587]"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-gray-500 hover:text-[#29a587]"
            >
              Privacy
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()}{" "}
              <a
                href="https://arvid.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#29a587]"
              >
                Arvid Berndtsson
              </a>
            </p>
            <a
              href="https://www.linkedin.com/in/arvid-berndtsson/?locale=en_US"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#29a587]"
            >
              <span className="sr-only">LinkedIn</span>
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
