import type { Metadata } from "next";
import Link from "next/link";

export const runtime = "experimental-edge";

export const metadata: Metadata = {
  title: "Security Policy | QR Spoof",
  description:
    "Security policy and responsible vulnerability disclosure guidelines for QR Spoof.",
  openGraph: {
    title: "Security Policy | QR Spoof",
    description:
      "Security policy and responsible vulnerability disclosure guidelines for QR Spoof.",
    url: "https://qrspoof.com/security",
    siteName: "QR Spoof",
    type: "website",
  },
};

export default function Security() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-gray-600 hover:text-[#29a587] transition-colors mb-6"
          >
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-4">
            Security Policy
          </h1>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 shadow-sm border border-blue-100/50 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment</h2>
            <p className="text-gray-700 leading-relaxed">
              Security awareness is at the heart of this project. We are committed to maintaining the security of our codebase and ensuring that our educational tools are not misused.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200/50 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Purpose</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              This project exists to <strong>educate users about QR code security risks</strong> (quishing). We believe in:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#29a587] rounded-full mt-2 mr-3" />
                <span>Responsible disclosure of security vulnerabilities</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#29a587] rounded-full mt-2 mr-3" />
                <span>Ethical security research and education</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#29a587] rounded-full mt-2 mr-3" />
                <span>Transparency in our security practices</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#29a587] rounded-full mt-2 mr-3" />
                <span>Protecting users from real-world threats</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200/50 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Supported Versions</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We currently support the following versions with security updates:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 px-4 text-gray-900 font-semibold">Version</th>
                    <th className="py-3 px-4 text-gray-900 font-semibold">Supported</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-700">Latest</td>
                    <td className="py-3 px-4 text-green-600 font-medium">✓ Supported</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-700">&lt; Latest</td>
                    <td className="py-3 px-4 text-red-600 font-medium">✗ Not Supported</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 text-sm mt-4">
              We recommend always using the latest version of the project.
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 shadow-sm border border-red-100/50 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Reporting a Vulnerability</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We take security seriously. If you discover a security vulnerability in this project, please help us protect our users by reporting it responsibly.
            </p>
            
            <div className="bg-white/80 rounded-2xl p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">⚠️ Important</h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>Please DO NOT report security vulnerabilities through public GitHub issues.</strong>
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">How to Report</h3>
            <p className="text-gray-700 mb-3">Instead, please report them via:</p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3 text-xs font-bold">1</span>
                <span>
                  <a 
                    href="https://linkedin.com/in/arvidberndtsson" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#29a587] hover:text-[#238f75] underline font-medium"
                  >
                    LinkedIn: Arvid Berndtsson
                  </a>
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3 text-xs font-bold">2</span>
                <span>Contact via LinkedIn for security-related issues</span>
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">What to Include</h3>
            <p className="text-gray-700 mb-3">When reporting a vulnerability, please include:</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-red-500 rounded-full mt-2 mr-3" />
                <span><strong>Description:</strong> A clear description of the vulnerability</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-red-500 rounded-full mt-2 mr-3" />
                <span><strong>Impact:</strong> What could an attacker accomplish with this vulnerability?</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-red-500 rounded-full mt-2 mr-3" />
                <span><strong>Steps to Reproduce:</strong> Detailed steps to reproduce the issue</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-red-500 rounded-full mt-2 mr-3" />
                <span><strong>Proof of Concept:</strong> If applicable (but please don&apos;t exploit the vulnerability)</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200/50 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Security Best Practices</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">For End Users</h3>
            <p className="text-gray-700 mb-3">When scanning QR codes:</p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#29a587] rounded-full mt-2 mr-3" />
                <span>Always verify the destination URL before proceeding</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#29a587] rounded-full mt-2 mr-3" />
                <span>Use QR scanner apps with URL preview features</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#29a587] rounded-full mt-2 mr-3" />
                <span>Be cautious of QR codes in public places or from unknown sources</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#29a587] rounded-full mt-2 mr-3" />
                <span>Don&apos;t enter sensitive information immediately after scanning</span>
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">For Project Users</h3>
            <p className="text-gray-700 mb-3">When using this project&apos;s tools:</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3" />
                <span>Only use for educational purposes - never create malicious QR codes</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3" />
                <span>Clearly communicate the educational intent when running awareness campaigns</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3" />
                <span>Obtain proper permissions before deploying QR codes in any physical location</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3" />
                <span>Follow all applicable laws in your jurisdiction</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-8 shadow-sm border border-yellow-100/50">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Legal Notice</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>This project is for educational purposes only.</strong> Any malicious use of the tools provided is:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 mr-3" />
                <span>Prohibited by our{" "}
                  <Link href="/code-of-conduct" className="text-[#29a587] hover:text-[#238f75] underline">
                    Code of Conduct
                  </Link>
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 mr-3" />
                <span>May violate laws in your jurisdiction</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 mr-3" />
                <span>Could result in criminal or civil liability</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 mr-3" />
                <span>Will be reported to appropriate authorities</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
