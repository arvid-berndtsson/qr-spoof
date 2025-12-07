import type { Metadata } from "next";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import QRCodeGenerator from "@/components/QRCodeGenerator";

export const runtime = "experimental-edge";

export const metadata: Metadata = {
  title: "QR Code Security - Protect Yourself from Quishing",
  description:
    "Learn about QR code security risks and how to protect yourself from quishing attacks.",
  openGraph: {
    title: "QR Code Security - Protect Yourself from Quishing",
    description:
      "Learn about QR code security risks and how to protect yourself from quishing attacks.",
    url: "https://qrspoof.com/",
    siteName: "QR Code Security",
    images: [
      {
        url: "https://qrspoof.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "QR Code Security - Protect yourself from QR code phishing",
      },
    ],
    locale: "sv_SE",
    type: "website",
  },
};

export default function Home() {
  const router = useRouter();
  const [originalUrl, setOriginalUrl] = useState<string | null>(null);
  const [showWarning, setShowWarning] = useState(false);
  const [qrValue, setQrValue] = useState("");

  useEffect(() => {
    const url = router.query.q as string;
    if (url) {
      setOriginalUrl(url);
      setShowWarning(true);
    }
    // Set QR code value after component mounts
    setQrValue(window.location.origin);
  }, [router.query]);

  const handleContinue = () => {
    if (originalUrl) {
      // Ensure the URL has a protocol
      let redirectUrl = originalUrl;
      if (
        !redirectUrl.startsWith("http://") &&
        !redirectUrl.startsWith("https://")
      ) {
        redirectUrl = "https://" + redirectUrl;
      }
      window.location.href = redirectUrl;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {showWarning && originalUrl && (
        <div className="bg-gradient-to-r from-red-600 to-red-500 text-white py-4 shadow-lg">
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex items-center justify-center space-x-3">
              <svg
                className="h-6 w-6 animate-pulse"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-lg font-medium">
                Security Alert: You just scanned an unverified QR code!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <main className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#29a587]/5 via-transparent to-blue-500/5 pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 py-20 sm:py-32 relative">
          <div className="text-center space-y-8 mb-20">
            <div className="inline-flex items-center justify-center px-4 py-1.5 bg-gradient-to-r from-[#29a587]/10 to-blue-500/10 rounded-full text-sm font-medium text-[#29a587] mb-4 border border-[#29a587]/20">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Security Awareness Tool
            </div>
            
            <h1 className="text-6xl sm:text-7xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight">
              {originalUrl
                ? "Stop! Think Before You Scan"
                : "QR Code Security\nAwareness"}
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              {originalUrl
                ? "You've just experienced how easy it is to be redirected through an unknown QR code. This could have been a malicious attack known as 'quishing'."
                : "Learn about QR code phishing and protect yourself from malicious QR codes in the wild."}
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {/* Danger Card */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-sm border border-gray-200/50 hover:shadow-xl hover:border-gray-300 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-500/10 to-transparent rounded-full blur-2xl" />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl mb-6 shadow-lg shadow-red-500/20">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  The Danger
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Malicious QR codes can compromise your security:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start group/item">
                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-red-500 rounded-full mt-2 mr-3" />
                    <span className="text-gray-700 leading-relaxed">Lead to fake websites that steal your information</span>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-red-500 rounded-full mt-2 mr-3" />
                    <span className="text-gray-700 leading-relaxed">Install malware on your device</span>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-red-500 rounded-full mt-2 mr-3" />
                    <span className="text-gray-700 leading-relaxed">Trick you into sending money or personal data</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Safety Card */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-sm border border-gray-200/50 hover:shadow-xl hover:border-gray-300 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#29a587]/10 to-transparent rounded-full blur-2xl" />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#29a587] to-[#238f75] rounded-2xl mb-6 shadow-lg shadow-[#29a587]/20">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  How to Stay Safe
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Protect yourself with these simple practices:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start group/item">
                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#29a587] rounded-full mt-2 mr-3" />
                    <span className="text-gray-700 leading-relaxed">Always verify the URL before entering sensitive information</span>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#29a587] rounded-full mt-2 mr-3" />
                    <span className="text-gray-700 leading-relaxed">Use QR code scanning apps with built-in security checks</span>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#29a587] rounded-full mt-2 mr-3" />
                    <span className="text-gray-700 leading-relaxed">Be cautious of QR codes in public places</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {originalUrl && (
            <div className="relative bg-white rounded-3xl p-8 shadow-sm border border-gray-200/50 mb-16">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-2xl" />
              <div className="relative">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Continue to Website
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  If you trust this QR code, you can continue to the original website:
                </p>
                <div className="bg-gray-50 p-4 rounded-2xl mb-6 border border-gray-200">
                  <p className="text-sm text-gray-700 break-all font-mono">
                    {originalUrl}
                  </p>
                </div>
                <button
                  onClick={handleContinue}
                  className="w-full bg-gradient-to-r from-[#29a587] to-[#238f75] text-white px-6 py-4 rounded-2xl hover:shadow-lg hover:shadow-[#29a587]/20 transition-all duration-200 font-medium"
                >
                  Continue to Website
                </button>
              </div>
            </div>
          )}

          {/* Educational Purpose Card */}
          <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 shadow-sm border border-blue-100/50 mb-16 overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-3xl" />
            <div className="relative">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Educational Purpose Only
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    This tool is designed <strong>exclusively for educational and security awareness purposes</strong>. Use it responsibly to:
                  </p>
                </div>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3" />
                  <span className="text-gray-700 leading-relaxed">Teach people about QR code security risks</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3" />
                  <span className="text-gray-700 leading-relaxed">Demonstrate quishing attacks in controlled environments</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3" />
                  <span className="text-gray-700 leading-relaxed">Conduct authorized security awareness training</span>
                </li>
              </ul>
              
              <div className="pt-6 border-t border-blue-200/50">
                <p className="text-sm text-gray-700">
                  Learn more about{" "}
                  <Link
                    href="/spread-awareness"
                    className="text-blue-600 hover:text-blue-700 font-medium underline underline-offset-2"
                  >
                    ethical ways to spread awareness
                  </Link>{" "}
                  or read our{" "}
                  <Link
                    href="/code-of-conduct"
                    className="text-blue-600 hover:text-blue-700 font-medium underline underline-offset-2"
                  >
                    Code of Conduct
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>

          {/* QR Generator Section */}
          <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-200/50">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Generate Awareness QR Codes
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Create QR codes that help educate users about QR code security.
                When scanned, these codes will:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#29a587] rounded-full mt-2 mr-3" />
                  <span className="text-gray-700 leading-relaxed">Show the destination URL before redirecting</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#29a587] rounded-full mt-2 mr-3" />
                  <span className="text-gray-700 leading-relaxed">Provide quick safety tips for scanning QR codes</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#29a587] rounded-full mt-2 mr-3" />
                  <span className="text-gray-700 leading-relaxed">Give users a moment to verify the link is safe</span>
                </li>
              </ul>
            </div>

            <QRCodeGenerator />
          </div>
        </div>
      </main>
    </div>
  );
}
