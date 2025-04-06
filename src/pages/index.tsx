import type { Metadata } from "next";
import { useState, useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";
import { useRouter } from "next/router";
import Link from "next/link";

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
    <div className="min-h-screen bg-white">
      {showWarning && originalUrl && (
        <div className="bg-red-600 text-white py-4">
          <div className="max-w-3xl mx-auto px-6">
            <div className="flex items-center justify-center space-x-2">
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

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-6">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 mb-4">
              {originalUrl
                ? "Stop! Think Before You Scan"
                : "QR Code Security Awareness"}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {originalUrl
                ? "You've just experienced how easy it is to be redirected through an unknown QR code. This could have been a malicious attack known as 'quishing' (QR code phishing)."
                : "Learn about the dangers of QR code phishing ('quishing') and how to protect yourself from malicious QR codes."}
            </p>
          </div>

          <div className="space-y-8 mt-12">
            <div className="bg-red-50 p-8 rounded-2xl shadow-sm border border-red-100">
              <h2 className="text-2xl font-semibold text-red-900 mb-4">
                The Danger
              </h2>
              <p className="text-red-800 leading-relaxed">
                Malicious QR codes can:
              </p>
              <ul className="mt-4 space-y-3 text-red-800">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Lead to fake websites that steal your information
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Install malware on your device
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Trick you into sending money or personal data
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                How to Stay Safe
              </h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#29a587] mr-2">•</span>
                  Always verify the URL before entering sensitive information
                </li>
                <li className="flex items-start">
                  <span className="text-[#29a587] mr-2">•</span>
                  Use QR code scanning apps with built-in security checks
                </li>
                <li className="flex items-start">
                  <span className="text-[#29a587] mr-2">•</span>
                  Be cautious of QR codes in public places
                </li>
              </ul>
            </div>

            {originalUrl && (
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Continue to Website
                </h2>
                <p className="text-gray-600 mb-4">
                  If you trust this QR code, you can continue to the original
                  website:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="text-sm text-gray-500 break-all">
                    {originalUrl}
                  </p>
                </div>
                <button
                  onClick={handleContinue}
                  className="w-full bg-[#29a587] text-white px-6 py-3 rounded-lg hover:bg-[#238f75] transition-colors"
                >
                  Continue to Website
                </button>
              </div>
            )}

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Spread Awareness
              </h2>
              <p className="text-gray-600 mb-6">
                Help others learn about QR code security by creating and sharing
                awareness QR codes.
              </p>
              <div className="flex flex-col items-center space-y-6">
                <Link
                  href="/generate"
                  className="w-full bg-[#29a587] text-white text-center px-6 py-3 rounded-lg hover:bg-[#238f75] transition-colors"
                >
                  Generate Security QR Codes
                </Link>
                {qrValue && (
                  <div className="bg-white p-6 rounded-xl border border-gray-200">
                    <QRCodeSVG
                      value={qrValue}
                      size={200}
                      level="H"
                      includeMargin={true}
                      className="mx-auto"
                    />
                    <p className="text-center text-gray-500 mt-4 text-sm">
                      Share this QR code to spread awareness
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
