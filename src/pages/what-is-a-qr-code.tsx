import { Metadata } from "next";
import FAQPageLayout from "../components/FAQPageLayout";
import Section from "../components/Section";
import TechnicalDetails from "../components/faq/TechnicalDetails";

export const metadata: Metadata = {
  title: "What is a QR Code? | QR Code Security Guide",
  description:
    "Learn about QR codes, their history, how they work, and their role in modern digital interactions.",
  openGraph: {
    title: "What is a QR Code? | QR Code Security Guide",
    description:
      "Learn about QR codes, their history, how they work, and their role in modern digital interactions.",
    type: "website",
    locale: "en_US",
    siteName: "QR Spoof",
  },
};

export default function WhatIsAQRCode() {
  const basicsDetails = [
    {
      title: "Numeric Data",
      description: "Up to 7,089 characters of numbers",
      icon: "🔢",
    },
    {
      title: "Alphanumeric Data",
      description: "Up to 4,296 characters of letters and numbers",
      icon: "🔤",
    },
    {
      title: "Binary Data",
      description: "Up to 2,953 bytes of binary data",
      icon: "💾",
    },
    {
      title: "Kanji/Kana",
      description: "Up to 1,817 characters of Japanese text",
      icon: "🈯",
    },
  ];

  const howItWorksDetails = [
    {
      title: "Finder Patterns",
      description: "Three identical squares in the corners help scanners identify and orient the QR code.",
      icon: "🔍",
    },
    {
      title: "Alignment Patterns",
      description: "Smaller squares that help scanners correct for distortion and perspective.",
      icon: "📊",
    },
    {
      title: "Timing Patterns",
      description: "Alternating black and white modules that help determine the size of the QR code.",
      icon: "📏",
    },
    {
      title: "Error Correction",
      description: "Redundant data that allows the QR code to be read even if partially damaged.",
      icon: "🛡️",
    },
  ];

  const commonUsesDetails = [
    {
      title: "Marketing",
      description: "Product information, promotional offers, and social media links",
      icon: "📢",
    },
    {
      title: "Payments",
      description: "Mobile payments, digital wallets, and bank transfers",
      icon: "💳",
    },
    {
      title: "Information",
      description: "Contact details, Wi-Fi access, and event tickets",
      icon: "ℹ️",
    },
  ];

  return (
    <FAQPageLayout
      title="What is a QR Code?"
      description="Discover the technology behind QR codes and how they've revolutionized digital communication."
      accentColor="#3B82F6"
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
            d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
          />
        </svg>
      }
    >
      <Section title="The Basics">
        <TechnicalDetails
          title="Data Storage"
          description="A QR (Quick Response) code is a two-dimensional barcode that can store various types of data:"
          details={basicsDetails}
        />
      </Section>

      <Section title="How QR Codes Work">
        <TechnicalDetails
          title="Key Components"
          description="QR codes use a sophisticated system of patterns and error correction to ensure reliable scanning:"
          details={howItWorksDetails}
        />
      </Section>

      <Section title="Common Uses">
        <TechnicalDetails
          title="Applications"
          description="QR codes have become ubiquitous in modern life, serving various purposes:"
          details={commonUsesDetails}
        />
      </Section>
    </FAQPageLayout>
  );
} 