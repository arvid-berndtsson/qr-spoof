import type { Metadata } from "next";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Privacy Policy - QR Code Security",
  description: "Privacy policy for QR code security awareness tool.",
  openGraph: {
    title: "Privacy Policy - QR Code Security",
    description: "Privacy policy for QR code security awareness tool.",
    url: "https://qrspoof.com/privacy",
    siteName: "QR Code Security",
    images: [
      {
        url: "https://qrspoof.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Privacy Policy - QR Code Security",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-6">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              How we handle your data
            </p>
          </div>

          <div className="space-y-8 mt-12">
            <Section title="Analytics">
              <p>
                This website uses a self-hosted instance of Umami Analytics to understand how visitors interact with the site. Umami is an open-source, privacy-focused analytics tool that:
              </p>
              <ul className="space-y-4 text-gray-600 mt-4">
                <li className="flex items-start">
                  <span className="text-[#29a587] mr-2">•</span>
                  Does not use cookies
                </li>
                <li className="flex items-start">
                  <span className="text-[#29a587] mr-2">•</span>
                  Does not collect personal information
                </li>
                <li className="flex items-start">
                  <span className="text-[#29a587] mr-2">•</span>
                  Does not track users across websites
                </li>
                <li className="flex items-start">
                  <span className="text-[#29a587] mr-2">•</span>
                  Stores all data on my own server
                </li>
              </ul>
              <p className="mt-4">
                The data collected includes basic information like page views, referrers, and device types. This helps me understand how the site is being used and how to improve it.
              </p>
            </Section>

            <Section title="QR Code Generation">
              <p>
                When you generate a QR code on this site:
              </p>
              <ul className="space-y-4 text-gray-600 mt-4">
                <li className="flex items-start">
                  <span className="text-[#29a587] mr-2">•</span>
                  No data is stored on our servers
                </li>
                <li className="flex items-start">
                  <span className="text-[#29a587] mr-2">•</span>
                  All processing happens in your browser
                </li>
                <li className="flex items-start">
                  <span className="text-[#29a587] mr-2">•</span>
                  We don&apos;t track or store the URLs you use
                </li>
              </ul>
            </Section>

            <Section title="Contact">
              <p className="mb-4">If you have questions about our privacy practices:</p>
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
