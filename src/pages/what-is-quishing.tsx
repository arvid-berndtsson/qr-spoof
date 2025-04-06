import type { Metadata } from "next";
import FAQPageLayout from "../components/FAQPageLayout";
import Section from "../components/Section";
import TechnicalDetails from "../components/faq/TechnicalDetails";

export const runtime = "experimental-edge";

export const metadata: Metadata = {
  title: "What is Quishing? | QR Code Phishing Explained",
  description:
    "Learn about quishing (QR code phishing) - how it works, real-world examples, and how to protect yourself from this growing cyber threat.",
  openGraph: {
    title: "What is Quishing? | QR Code Phishing Explained",
    description:
      "Learn about quishing (QR code phishing) - how it works, real-world examples, and how to protect yourself from this growing cyber threat.",
    type: "website",
    locale: "en_US",
    siteName: "QR Spoof",
  },
};

export default function WhatIsQuishing() {
  const understandingDetails = [
    {
      title: "Common Targets",
      description:
        "Public Wi-Fi networks, restaurant menus, parking meters, event tickets, and product packaging",
      icon: "🎯",
    },
    {
      title: "Attack Methods",
      description:
        "URL redirection, malware downloads, credential harvesting, payment fraud, and data theft",
      icon: "⚔️",
    },
  ];

  const examplesDetails = [
    {
      title: "Parking Meter Scam",
      description:
        "Attackers placed malicious QR codes over legitimate ones on parking meters, redirecting users to fake payment pages that stole credit card information. Over $500,000 was stolen from victims before the scam was discovered.",
      icon: "🚗",
    },
    {
      title: "Restaurant Menu Attack",
      description:
        "Hackers replaced QR codes on digital menus with malicious versions that installed malware on customers' phones. Personal data was compromised for thousands of customers, including payment information and contact details.",
      icon: "🍽️",
    },
    {
      title: "Public Wi-Fi Trap",
      description:
        "Cybercriminals created fake QR codes for 'free public Wi-Fi' that installed keyloggers on victims' devices. This allowed attackers to capture sensitive information including passwords and banking details.",
      icon: "📶",
    },
  ];

  const protectionDetails = [
    {
      title: "Before Scanning",
      description:
        "Check for tampering, verify the source, and use trusted scanners. Look for signs of physical tampering or stickers placed over existing QR codes.",
      icon: "🔍",
    },
    {
      title: "While Scanning",
      description:
        "Preview the URL, check for HTTPS, and look for typos. Most QR scanner apps will show you the destination URL before opening it - take a moment to verify it looks legitimate.",
      icon: "📱",
    },
    {
      title: "After Scanning",
      description:
        "Verify the website, check for SSL, and use strong passwords. If you're asked to enter sensitive information, double-check the website's security indicators and consider using a password manager.",
      icon: "🔒",
    },
  ];

  return (
    <FAQPageLayout
      title="What is Quishing?"
      description="Learn about QR code phishing attacks and how to protect yourself from this growing security threat."
      accentColor="#EF4444"
      icon={
        <svg
          className="h-16 w-16 text-white mx-auto"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      }
    >
      <Section title="Understanding Quishing">
        <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-red-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">
                Quishing attacks are on the rise, with a 300% increase in
                reported cases in 2023. These attacks target both individuals
                and businesses, often resulting in significant financial losses
                and data breaches.
              </p>
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none mb-6">
          <p>
            Quishing (QR code phishing) is a type of cyber attack where
            malicious QR codes are used to trick users into:
          </p>
        </div>

        <TechnicalDetails
          title="Attack Overview"
          description="Understanding the scope and methods of quishing attacks is crucial for protection:"
          details={understandingDetails}
        />

        <div className="prose prose-lg max-w-none mt-6">
          <p>
            These attacks are particularly dangerous because QR codes are often
            perceived as safe and convenient. Many users don&apos;t think twice
            before scanning a QR code, especially in trusted environments like
            restaurants or public spaces.
          </p>
        </div>
      </Section>

      <Section title="Real-World Examples">
        <div className="prose prose-lg max-w-none mb-6">
          <p>
            Here are some notable examples of quishing attacks that demonstrate
            the real-world impact of this threat:
          </p>
        </div>

        <TechnicalDetails
          title="Recent Attacks"
          description="These cases highlight the sophistication and impact of modern quishing attacks:"
          details={examplesDetails}
        />

        <div className="prose prose-lg max-w-none mt-6">
          <p>
            These examples show how quishing attacks can target different
            aspects of daily life, from parking payments to dining out. The
            common thread is the exploitation of trust in QR codes as a
            convenient technology.
          </p>
        </div>
      </Section>

      <Section title="Protection Measures">
        <div className="prose prose-lg max-w-none mb-6">
          <p>
            While quishing attacks are sophisticated, there are several steps
            you can take to protect yourself:
          </p>
        </div>

        <TechnicalDetails
          title="Safety Tips"
          description="Follow these comprehensive guidelines to protect yourself from quishing attacks:"
          details={protectionDetails}
        />

        <div className="prose prose-lg max-w-none mt-6">
          <p>
            Remember that QR codes are just a tool - like any technology, they
            can be used for both good and malicious purposes. The key is to
            maintain awareness and follow security best practices when scanning
            QR codes.
          </p>
        </div>
      </Section>
    </FAQPageLayout>
  );
}
