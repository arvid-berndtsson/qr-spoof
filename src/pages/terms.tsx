import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use - QR Code Security",
  description: "Responsible use policy for QR code security awareness tool.",
  openGraph: {
    title: "Terms of Use - QR Code Security",
    description: "Responsible use policy for QR code security awareness tool.",
    url: "https://qrspoof.com/terms",
    siteName: "QR Code Security",
    images: [
      {
        url: "https://qrspoof.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Terms of Use - QR Code Security",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-6">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 mb-4">
              Terms of Use
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Responsible Use Policy
            </p>
          </div>

          <div className="space-y-8 mt-12">
            <Section title="Purpose">
              <p>
                This tool is designed to help raise awareness around{" "}
                <strong>QR code phishing (quishing)</strong> by offering a safe,
                educational detour before users reach their intended
                destination.
              </p>
            </Section>

            <Section title="Agreement">
              <p className="mb-4">
                By using this tool, you agree to the following:
              </p>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#29a587] mr-2">•</span>
                  <strong>Only use it to promote awareness</strong>, not for
                  misleading, malicious or disruptive purposes
                </li>
                <li className="flex items-start">
                  <span className="text-[#29a587] mr-2">•</span>
                  You are fully responsible for how and where you place
                  generated QR codes
                </li>
                <li className="flex items-start">
                  <span className="text-[#29a587] mr-2">•</span>
                  <strong>
                    Do not use this tool to impersonate, interrupt, or confuse
                    legitimate businesses
                  </strong>
                </li>
              </ul>
            </Section>

            <Section title="Public Use Guidelines">
              <p className="mb-4">
                If you&apos;re placing a QR code in a public or commercial
                setting (like on a restaurant table), make sure it:
              </p>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#29a587] mr-2">•</span>
                  Does <strong>not</strong> block or override legitimate codes
                </li>
                <li className="flex items-start">
                  <span className="text-[#29a587] mr-2">•</span>
                  Clearly indicates it&apos;s for awareness purposes
                </li>
                <li className="flex items-start">
                  <span className="text-[#29a587] mr-2">•</span>
                  Includes a working link or reference to the actual destination
                  (e.g. menu, payment link, etc.)
                </li>
              </ul>
            </Section>

            <Section title="Liability">
              <p>
                This is an open and free tool.{" "}
                <strong>
                  I, Arvid Berndtsson, take no responsibility for how QR codes
                  generated via this service are used.
                </strong>
              </p>
              <p className="mt-4">
                Use common sense, stay ethical, and help promote better digital
                hygiene – without creating confusion.
              </p>
            </Section>

            <Section title="Contact">
              <p className="mb-4">If you have questions, ideas, or concerns:</p>
              <a
                href="https://linkedin.com/in/arvidberndtsson"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#29a587] hover:text-[#238f75] flex items-center"
              >
                <span className="mr-2">📎</span>
                Find me on LinkedIn
              </a>
            </Section>
          </div>
        </div>
      </main>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h2>
      <div className="text-gray-600 leading-relaxed">{children}</div>
    </div>
  );
}
