import type { Metadata } from "next";
import { useState, useEffect } from "react";
import Section from "@/components/Section";
import { QRCodeCanvas } from "qrcode.react";
import { useRouter } from "next/router";
import Link from "next/link";
import QRCodeGenerator from "@/components/QRCodeGenerator";

export const metadata: Metadata = {
  title: "QR Codes, Trust, and a Quiet Reminder",
  description:
    "Understanding quishing and why we need to be more careful with QR codes in our daily lives.",
  openGraph: {
    title: "QR Codes, Trust, and a Quiet Reminder",
    description:
      "Understanding quishing and why we need to be more careful with QR codes in our daily lives.",
    url: "https://qrspoof.com/about",
    siteName: "QR Code Security",
    images: [
      {
        url: "https://qrspoof.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "QR Codes, Trust, and a Quiet Reminder",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function About() {
  const router = useRouter();
  const [qrValue, setQrValue] = useState("");

  useEffect(() => {
    setQrValue(window.location.origin);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-6">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 mb-4">
              QR Codes, Trust, and a Quiet Reminder
            </h1>
          </div>

          <div className="space-y-8 mt-12">
            <Section title="What is quishing?">
              <p>
                <strong>Quishing</strong> is phishing using QR codes. It&apos;s
                when attackers replace a link with a QR code, hoping you&apos;ll
                scan without thinking — leading to fake login pages, malware, or
                worse.
              </p>
              <p className="mt-4">
                The success of this trick relies on one thing: We trust QR codes
                more than we should.
              </p>
            </Section>

            <Section title="Why this project exists">
              <p>
                We've learned not to click sketchy links in emails. But a random
                QR code on a lamppost? Sure, why not.
              </p>
              <p className="mt-4">
                That contradiction got stuck in my head years ago — the first
                time I scanned a QR code and thought: "I have no idea where that
                just took me."
              </p>
              <p className="mt-4">
                In the summer of 2024, I bought this domain, thinking I&apos;d
                eventually do something with it. Then, while listening to an
                episode of the Swedish podcast{" "}
                <a
                  href="https://shows.acast.com/cyber-chats-chill/episodes/26-cyber-chats-chills-julkalender-2024-lucka-6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#29a587] hover:text-[#238f75]"
                >
                  Cyber Chats & Chill
                </a>
                , I was reminded that I still owned it. That was the nudge I
                needed.
              </p>
              <p className="mt-4">So here we are.</p>
            </Section>

            <Section title="What this site actually does">
              <p>
                This site lets <strong>anyone</strong> generate a QR code that
                points here — a safe in-between page that encourages people to
                stop and think before they trust what&apos;s behind the scan.
              </p>
              <p className="mt-4">
                You can use it for awareness campaigns, workshops, or just as a
                quiet little social experiment.
              </p>
              <p className="mt-4">
                Because sometimes, all it takes is one click (or scan) too many.
              </p>
            </Section>

            <Section title="Who I am">
              <p>
                Hi! I&apos;m{" "}
                <a
                  href="https://arvid.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#29a587] hover:text-[#238f75]"
                >
                  Arvid Berndtsson
                </a>
                , a developer with a long-running interest in cybersecurity and
                the weird ways we interact with tech.
              </p>
              <p className="mt-4">
                I&apos;ve always been curious about small, everyday risks, like
                QR codes, and how easily they bypass the caution we apply
                elsewhere. After that first moment of &quot;wait, where did
                this send me?&quot;, I started using Norton&apos;s QR scanner,
                which previews links before opening them. That small habit has
                stuck ever since.
              </p>
              <p className="mt-4">
                I&apos;m not on a crusade, I just want you to think before you
                scan a QR code, just like you pause before clicking a link in an
                email.
              </p>
            </Section>

            <Section title="How to stay safe when scanning QR codes">
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#29a587] mr-2">•</span>
                  Use a QR code scanner that shows you the URL before opening it
                </li>
                <li className="flex items-start">
                  <span className="text-[#29a587] mr-2">•</span>
                  Don&apos;t scan random codes in public spaces, especially
                  stickers or handouts with no context
                </li>
                <li className="flex items-start">
                  <span className="text-[#29a587] mr-2">•</span>
                  Be extra careful if the code leads to a login page or download
                  prompt
                </li>
                <li className="flex items-start">
                  <span className="text-[#29a587] mr-2">•</span>
                  Trust your gut, the rules for emails apply here too
                </li>
              </ul>
            </Section>

            <Section title="Want to learn more?">
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-[#29a587] mr-2">🧠</span>
                  <a
                    href="https://axbom.com/quishing-parking/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#29a587] hover:text-[#238f75]"
                  >
                    What is quishing? – Per Axbom
                  </a>
                </li>
                <li className="flex items-start">
                  <span className="text-[#29a587] mr-2">🎧</span>
                  <a
                    href="https://shows.acast.com/cyber-chats-chill/episodes/26-cyber-chats-chills-julkalender-2024-lucka-6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#29a587] hover:text-[#238f75]"
                  >
                    Cyber Chats & Chill (Swedish podcast)
                  </a>
                </li>
                <li className="flex items-start">
                  <span className="text-[#29a587] mr-2">🔐</span>
                  <a
                    href="https://tryhackme.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#29a587] hover:text-[#238f75]"
                  >
                    TryHackMe – Phishing awareness
                  </a>
                </li>
                <li className="flex items-start">
                  <span className="text-[#29a587] mr-2">📎</span>
                  <a
                    href="https://linkedin.com/in/arvidberndtsson"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#29a587] hover:text-[#238f75]"
                  >
                    Find me on LinkedIn
                  </a>
                </li>
              </ul>
            </Section>

            <div className="prose prose-lg max-w-none mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                How it works
              </h2>
              <p className="mb-4">
                When someone scans your QR code, they&apos;ll first see an
                awareness page that:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Shows the destination URL before redirecting</li>
                <li>Provides quick safety tips for scanning QR codes</li>
                <li>Gives users a moment to verify the link is safe</li>
              </ul>
              <p className="mb-4">
                This helps educate users about QR code security while still
                getting them to their destination.
              </p>
            </div>

            <QRCodeGenerator />
          </div>
        </div>
      </main>
    </div>
  );
}
