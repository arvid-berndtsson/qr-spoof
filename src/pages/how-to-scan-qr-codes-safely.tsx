import { Metadata } from "next";
import Link from "next/link";
import FAQPageLayout from "../components/FAQPageLayout";
import Section from "../components/Section";
import Checklist from "../components/faq/Checklist";
import AppRecommendations from "../components/faq/AppRecommendations";
import Scenarios from "../components/faq/Scenarios";
import EmergencyActions from "../components/faq/EmergencyActions";

export const metadata: Metadata = {
  title: "How to Scan QR Codes Safely | QR Code Security Guide",
  description:
    "Learn how to spot unsafe QR codes, scan more cautiously, and stay protected from QR code phishing (quishing) attacks.",
  openGraph: {
    title: "How to Scan QR Codes Safely | QR Code Security Guide",
    description:
      "Learn how to spot unsafe QR codes, scan more cautiously, and stay protected from QR code phishing (quishing) attacks.",
    type: "website",
    locale: "en_US",
    siteName: "QR Spoof",
  },
};

export default function HowToScanQRCodesSafely() {
  const beforeScanningItems = [
    {
      title: "Check for signs of tampering",
      description: "Look for stickers placed over existing codes or codes that appear to be hastily added.",
    },
    {
      title: "Verify the source is legitimate",
      description: "Ensure the QR code is from a trusted source and matches the context of its location.",
    },
    {
      title: "Use a trusted QR scanner app",
      description: "Choose apps that show the URL before opening and have security features.",
    },
    {
      title: "Look for official branding",
      description: "Legitimate QR codes often include company logos or branding elements.",
    },
  ];

  const whileScanningItems = [
    {
      title: "Preview the URL before opening",
      description: "Always check the destination URL before proceeding to the website.",
    },
    {
      title: "Check for HTTPS in the URL",
      description: "Ensure the website uses secure HTTPS protocol for data encryption.",
    },
    {
      title: "Look for misspellings in the domain",
      description: "Watch for subtle misspellings that might indicate a phishing attempt.",
    },
    {
      title: "Verify the website looks legitimate",
      description: "Check for professional design, proper branding, and contact information.",
    },
  ];

  const appCategories = [
    {
      title: "iOS",
      apps: [
        {
          name: "Native Camera App",
          description: "Built-in security features and seamless integration with iOS.",
        },
        {
          name: "QR Reader by Scan",
          description: "Advanced security features and URL preview capabilities.",
        },
        {
          name: "QR Code Reader by Kaspersky",
          description: "Real-time security checks and phishing protection.",
        },
      ],
    },
    {
      title: "Android",
      apps: [
        {
          name: "Google Lens",
          description: "Integrated with Google&apos;s security infrastructure and safe browsing.",
        },
        {
          name: "QR & Barcode Scanner",
          description: "Open-source scanner with no ads and privacy focus.",
        },
        {
          name: "QR Code Reader by Kaspersky",
          description: "Enterprise-grade security features and malware detection.",
        },
      ],
    },
  ];

  const features = [
    {
      name: "URL preview",
      description: "Shows the destination URL before opening the link.",
    },
    {
      name: "Security warnings",
      description: "Alerts about suspicious or known malicious URLs.",
    },
    {
      name: "No ads or tracking",
      description: "Ensures privacy and prevents unwanted data collection.",
    },
    {
      name: "Regular updates",
      description: "Keeps security features current with latest threats.",
    },
  ];

  const scenarios = [
    {
      title: "Restaurant Menus",
      description: "When scanning a menu QR code, verify it&apos;s provided by the restaurant staff and not a sticker placed by someone else. Attackers often target busy restaurants where customers are in a hurry to order.",
      tip: "Ask staff if you&apos;re unsure about the QR code&apos;s authenticity. Legitimate restaurants will be happy to verify.",
    },
    {
      title: "Payment QR Codes",
      description: "Always double-check payment QR codes, especially in public places. Verify the amount and recipient before completing the transaction. Scammers often replace legitimate payment codes with their own.",
      tip: "Use payment apps with built-in security features that verify merchant information.",
    },
    {
      title: "Public Wi-Fi",
      description: "Be cautious when scanning QR codes for Wi-Fi access. Verify they&apos;re from the legitimate network provider. Fake Wi-Fi QR codes can lead to man-in-the-middle attacks.",
      tip: "Use a VPN when connecting to public Wi-Fi to encrypt your connection and protect your data.",
    },
  ];

  const immediateActions = [
    {
      title: "Close the browser tab immediately",
      description: "Prevent any further interaction with the suspicious website.",
    },
    {
      title: "Don&apos;t enter any information",
      description: "Avoid providing any personal or financial details.",
    },
    {
      title: "Clear your browser history",
      description: "Remove any cached data from the suspicious site.",
    },
    {
      title: "Run a security scan",
      description: "Check your device for any potential malware or threats.",
    },
  ];

  const followUpActions = [
    {
      title: "Change passwords immediately",
      description: "Update passwords for any accounts you accessed.",
    },
    {
      title: "Enable two-factor authentication",
      description: "Add an extra layer of security to your accounts.",
    },
    {
      title: "Contact your bank if needed",
      description: "Report any suspicious activity on your accounts.",
    },
    {
      title: "Monitor accounts for suspicious activity",
      description: "Keep an eye on your accounts for unauthorized access.",
    },
  ];

  return (
    <FAQPageLayout
      title="How to Scan QR Codes Safely"
      description="Learn essential tips and best practices for safely scanning QR codes in various situations."
      accentColor="#10B981"
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
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      }
    >
      <Section title="Safety Checklist">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Checklist
            title="Before Scanning"
            items={beforeScanningItems}
          />
          <Checklist
            title="While Scanning"
            items={whileScanningItems}
          />
        </div>
      </Section>

      <Section title="Recommended QR Scanner Apps">
        <AppRecommendations
          categories={appCategories}
          features={features}
        />
      </Section>

      <Section title="Common Scenarios">
        <Scenarios
          scenarios={scenarios}
        />
      </Section>

      <Section title="What to Do If You Scan a Suspicious QR Code">
        <EmergencyActions
          immediateActions={immediateActions}
          followUpActions={followUpActions}
        />
      </Section>
    </FAQPageLayout>
  );
} 