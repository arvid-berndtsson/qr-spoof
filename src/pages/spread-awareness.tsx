import type { Metadata } from "next";
import Section from "@/components/Section";
import Link from "next/link";

export const runtime = "experimental-edge";

export const metadata: Metadata = {
  title: "Spread Awareness About QR Code Security | Ethical Guidelines",
  description:
    "Learn how to responsibly spread awareness about QR code security and quishing attacks. Ethical guidelines for educators, trainers, and security advocates.",
  openGraph: {
    title: "Spread Awareness About QR Code Security | Ethical Guidelines",
    description:
      "Learn how to responsibly spread awareness about QR code security and quishing attacks. Ethical guidelines for educators, trainers, and security advocates.",
    url: "https://qrspoof.com/spread-awareness",
    siteName: "QR Code Security",
    images: [
      {
        url: "https://qrspoof.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Spread Awareness About QR Code Security",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function SpreadAwareness() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center justify-center p-3 bg-[#29a587] rounded-full mb-4">
              <svg
                className="h-12 w-12 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                />
              </svg>
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 mb-4">
              Spread Awareness Responsibly
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Help make the digital world safer by educating others about QR
              code security. Here&apos;s how to do it ethically and effectively.
            </p>
          </div>

          <div className="space-y-8 mt-12">
            <div className="bg-[#29a587] bg-opacity-10 p-8 rounded-2xl shadow-sm border border-[#29a587] border-opacity-20">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                🎯 Our Mission
              </h2>
              <p className="text-gray-700 leading-relaxed">
                QR Spoof exists to educate people about quishing (QR code
                phishing) and promote safer scanning habits. We believe in
                spreading awareness through transparency, education, and
                ethical practices—never through deception or fear.
              </p>
            </div>

            <Section title="✅ Appropriate Ways to Use This Tool">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="text-2xl mr-3">🏢</span>
                    Security Awareness Training
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Use in corporate or organizational security training programs
                    to demonstrate real-world threats.
                  </p>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-start">
                      <span className="text-[#29a587] mr-2">•</span>
                      Get approval from management or training coordinators
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#29a587] mr-2">•</span>
                      Clearly explain the educational purpose to participants
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#29a587] mr-2">•</span>
                      Include QR security in broader security awareness programs
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#29a587] mr-2">•</span>
                      Provide actionable takeaways and resources
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="text-2xl mr-3">🎓</span>
                    Educational Institutions
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Perfect for schools, universities, and training programs
                    teaching cybersecurity concepts.
                  </p>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-start">
                      <span className="text-[#29a587] mr-2">•</span>
                      Integrate into cybersecurity curriculum
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#29a587] mr-2">•</span>
                      Use in computer science or information security courses
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#29a587] mr-2">•</span>
                      Create hands-on learning exercises
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#29a587] mr-2">•</span>
                      Demonstrate real-world security challenges
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="text-2xl mr-3">🎤</span>
                    Conferences & Presentations
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Great for cybersecurity conferences, meetups, and public
                    speaking engagements.
                  </p>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-start">
                      <span className="text-[#29a587] mr-2">•</span>
                      Use live demonstrations to engage audiences
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#29a587] mr-2">•</span>
                      Provide handouts with educational QR codes
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#29a587] mr-2">•</span>
                      Share statistics and real-world examples
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#29a587] mr-2">•</span>
                      Encourage questions and discussion
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="text-2xl mr-3">🌍</span>
                    Community Education
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Help your local community stay safe with educational
                    campaigns and workshops.
                  </p>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-start">
                      <span className="text-[#29a587] mr-2">•</span>
                      Partner with libraries for public workshops
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#29a587] mr-2">•</span>
                      Create informational materials for seniors
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#29a587] mr-2">•</span>
                      Work with local businesses to promote safe practices
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#29a587] mr-2">•</span>
                      Always get permission from venue owners
                    </li>
                  </ul>
                </div>
              </div>
            </Section>

            <Section title="❌ What NOT to Do">
              <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-6">
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
                    <p className="text-sm text-red-700 font-semibold mb-2">
                      These actions are strictly prohibited and may be illegal:
                    </p>
                  </div>
                </div>
              </div>

              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 text-xl">✗</span>
                  <div>
                    <strong>Creating malicious QR codes</strong> that lead to
                    actual phishing sites, malware, or harmful content
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 text-xl">✗</span>
                  <div>
                    <strong>Unauthorized placement</strong> of QR codes on
                    property you don&apos;t own without permission
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 text-xl">✗</span>
                  <div>
                    <strong>Deceptive campaigns</strong> where people
                    aren&apos;t informed of the educational purpose
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 text-xl">✗</span>
                  <div>
                    <strong>Collecting personal data</strong> without proper
                    consent and privacy disclosures
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 text-xl">✗</span>
                  <div>
                    <strong>Using fear tactics</strong> or creating panic rather
                    than education
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 text-xl">✗</span>
                  <div>
                    <strong>Targeting vulnerable populations</strong> without
                    proper ethical oversight
                  </div>
                </li>
              </ul>
            </Section>

            <Section title="📱 Social Media Guidelines">
              <p className="text-gray-700 mb-4">
                Social media is a powerful tool for spreading awareness. Here&apos;s
                how to do it effectively:
              </p>

              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    What to Share
                  </h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-start">
                      <span className="text-[#29a587] mr-2">•</span>
                      Statistics about quishing attacks and their impact
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#29a587] mr-2">•</span>
                      Real-world examples and case studies
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#29a587] mr-2">•</span>
                      Tips for safe QR code scanning
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#29a587] mr-2">•</span>
                      Links to educational resources
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#29a587] mr-2">•</span>
                      Your experiences teaching others about QR security
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Recommended Hashtags
                  </h3>
                  <div className="flex flex-wrap gap-2 text-sm">
                    <span className="bg-[#29a587] text-white px-3 py-1 rounded-full">
                      #Cybersecurity
                    </span>
                    <span className="bg-[#29a587] text-white px-3 py-1 rounded-full">
                      #QRSecurity
                    </span>
                    <span className="bg-[#29a587] text-white px-3 py-1 rounded-full">
                      #Quishing
                    </span>
                    <span className="bg-[#29a587] text-white px-3 py-1 rounded-full">
                      #InfoSec
                    </span>
                    <span className="bg-[#29a587] text-white px-3 py-1 rounded-full">
                      #SecurityAwareness
                    </span>
                    <span className="bg-[#29a587] text-white px-3 py-1 rounded-full">
                      #StaySafeOnline
                    </span>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Example Post
                  </h3>
                  <div className="bg-white p-4 rounded border border-gray-200 text-sm text-gray-700 italic">
                    &quot;Did you know that QR code phishing (quishing) attacks
                    have increased by 300% in the past year? 📊
                    <br />
                    <br />
                    I&apos;ve been using QR Spoof to teach people about QR code
                    security. It&apos;s an educational tool that shows users
                    what happens when they scan untrusted QR codes.
                    <br />
                    <br />
                    Remember: Always verify the URL before entering sensitive
                    information! 🔒
                    <br />
                    <br />
                    #Cybersecurity #QRSecurity #Quishing #StaySafeOnline&quot;
                  </div>
                </div>
              </div>
            </Section>

            <Section title="📝 Creating Educational Content">
              <p className="text-gray-700 mb-4">
                Help spread awareness by creating your own content:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    📖 Blog Posts
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Personal experiences with QR security</li>
                    <li>• How-to guides for safe scanning</li>
                    <li>• Case studies of quishing attacks</li>
                    <li>• Industry trends and statistics</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    🎥 Video Content
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Tutorial videos on QR safety</li>
                    <li>• Demonstrations of quishing attacks</li>
                    <li>• Interviews with security experts</li>
                    <li>• Educational series on cybersecurity</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    🖼️ Infographics
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Visual guides to safe QR scanning</li>
                    <li>• Statistics and trends</li>
                    <li>• Step-by-step security checks</li>
                    <li>• Warning signs of malicious QR codes</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    📊 Presentations
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Workshop materials</li>
                    <li>• Conference presentations</li>
                    <li>• Training decks for organizations</li>
                    <li>• Educational slideshows</li>
                  </ul>
                </div>
              </div>
            </Section>

            <Section title="🤝 Collaboration Opportunities">
              <p className="text-gray-700 mb-4">
                Make a bigger impact by collaborating with others:
              </p>

              <div className="space-y-3 text-gray-700">
                <div className="flex items-start">
                  <span className="text-[#29a587] mr-2">•</span>
                  <div>
                    <strong>Cybersecurity Organizations:</strong> Partner with
                    organizations like ISACA, (ISC)², or local security groups
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-[#29a587] mr-2">•</span>
                  <div>
                    <strong>Educational Institutions:</strong> Work with
                    schools, colleges, and universities to integrate QR
                    security into curriculum
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-[#29a587] mr-2">•</span>
                  <div>
                    <strong>Community Centers:</strong> Offer workshops at
                    libraries, senior centers, and community organizations
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-[#29a587] mr-2">•</span>
                  <div>
                    <strong>Business Partners:</strong> Help local businesses
                    educate their employees and customers
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-[#29a587] mr-2">•</span>
                  <div>
                    <strong>Security Conferences:</strong> Propose talks or
                    workshops at cybersecurity events
                  </div>
                </div>
              </div>
            </Section>

            <Section title="📚 Resources">
              <p className="text-gray-700 mb-4">
                Additional resources to support your awareness efforts:
              </p>

              <div className="space-y-3">
                <Link
                  href="/what-is-quishing"
                  className="block bg-white p-4 rounded-lg border border-gray-200 hover:border-[#29a587] transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 mb-1">
                    What is Quishing?
                  </h3>
                  <p className="text-sm text-gray-600">
                    Learn about QR code phishing attacks and their impact
                  </p>
                </Link>

                <Link
                  href="/how-to-scan-qr-codes-safely"
                  className="block bg-white p-4 rounded-lg border border-gray-200 hover:border-[#29a587] transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 mb-1">
                    How to Scan QR Codes Safely
                  </h3>
                  <p className="text-sm text-gray-600">
                    Best practices for safe QR code scanning
                  </p>
                </Link>

                <a
                  href="https://github.com/arvid-berndtsson/qr-spoof/blob/main/CONTRIBUTING.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white p-4 rounded-lg border border-gray-200 hover:border-[#29a587] transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Contributing Guidelines
                  </h3>
                  <p className="text-sm text-gray-600">
                    Learn how to contribute to this project
                  </p>
                </a>
              </div>
            </Section>

            <div className="bg-[#29a587] text-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">
                Ready to Make a Difference?
              </h2>
              <p className="mb-6">
                Start spreading awareness about QR code security today. Every
                person you educate helps make the digital world a little bit
                safer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/generate"
                  className="bg-white text-[#29a587] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors text-center font-medium"
                >
                  Generate Educational QR Code
                </Link>
                <a
                  href="https://github.com/arvid-berndtsson/qr-spoof"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#29a587] transition-colors text-center font-medium"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
