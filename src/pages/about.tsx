import type { Metadata } from "next";
import { useState, useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { useRouter } from "next/router";
import Link from "next/link";

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
                <strong>Quishing</strong> is phishing using QR codes. It's when
                attackers replace a link with a QR code, hoping you'll scan
                without thinking — leading to fake login pages, malware, or
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
                In the summer of 2024, I bought this domain, thinking I'd
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
                stop and think before they trust what's behind the scan.
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
                Hi! I'm{" "}
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
                I've always been curious about small, everyday risks, like QR
                codes, and how easily they bypass the caution we apply
                elsewhere. After that first moment of "wait, where did this send
                me?", I started using Norton's QR scanner, which previews links
                before opening them. That small habit has stuck ever since.
              </p>
              <p className="mt-4">
                I'm not on a crusade, I just want you to think before you scan a
                QR code, just like you pause before clicking a link in an email.
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
                  Don't scan random codes in public spaces, especially stickers
                  or handouts with no context
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

            <div className="flex flex-col items-center space-y-6">
              <Link
                href="/generate"
                className="w-full bg-[#29a587] text-white text-center px-6 py-3 rounded-lg hover:bg-[#238f75] transition-colors"
              >
                Generate Awareness QR Codes
              </Link>
              {qrValue && (
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      const canvas = document.querySelector("canvas");
                      if (canvas) {
                        const link = document.createElement("a");
                        link.download = "qr-code-security-awareness.png";
                        link.href = canvas.toDataURL("image/png");
                        link.click();
                      }
                    }}
                    className="block"
                    title="Right-click to save and share this QR code"
                  >
                    <QRCodeCanvas
                      value={qrValue}
                      size={200}
                      level="H"
                      includeMargin={true}
                      className="mx-auto"
                    />
                  </a>
                  <p className="text-center text-gray-500 mt-4 text-sm">
                    Click to download or right-click to save this QR code
                  </p>
                </div>
              )}
            </div>
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
