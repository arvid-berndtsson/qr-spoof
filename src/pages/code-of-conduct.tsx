import type { Metadata } from "next";
import Link from "next/link";

export const runtime = "experimental-edge";

export const metadata: Metadata = {
  title: "Code of Conduct | QR Spoof",
  description:
    "Community standards and guidelines for ethical use of QR Spoof - an educational QR code security awareness tool.",
  openGraph: {
    title: "Code of Conduct | QR Spoof",
    description:
      "Community standards and guidelines for ethical use of QR Spoof - an educational QR code security awareness tool.",
    url: "https://qrspoof.com/code-of-conduct",
    siteName: "QR Spoof",
    type: "website",
  },
};

export default function CodeOfConduct() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-gray-600 hover:text-[#29a587] transition-colors mb-6"
          >
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-4">
            Code of Conduct
          </h1>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200/50 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Pledge</h2>
            <p className="text-gray-700 leading-relaxed">
              We as members, contributors, and leaders pledge to make participation in our community a harassment-free experience for everyone, regardless of age, body size, visible or invisible disability, ethnicity, sex characteristics, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, religion, or sexual identity and orientation.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy community focused on <strong>cybersecurity education and awareness</strong>.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 shadow-sm border border-blue-100/50 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Purpose</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              This project exists solely for <strong>educational purposes</strong> to raise awareness about QR code security risks (quishing). We are committed to:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3" />
                <span>Promoting ethical security awareness practices</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3" />
                <span>Educating users about digital safety</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3" />
                <span>Supporting responsible disclosure of security issues</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3" />
                <span>Maintaining a positive, educational approach to cybersecurity</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200/50 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Standards</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">✅ Positive Behavior</h3>
            <p className="text-gray-700 mb-3">Examples of behavior that contributes to a positive environment:</p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#29a587] rounded-full mt-2 mr-3" />
                <span>Demonstrating empathy and kindness toward other people</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#29a587] rounded-full mt-2 mr-3" />
                <span>Being respectful of differing opinions, viewpoints, and experiences</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#29a587] rounded-full mt-2 mr-3" />
                <span>Giving and gracefully accepting constructive feedback</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#29a587] rounded-full mt-2 mr-3" />
                <span>Using this project and its tools <strong>exclusively for educational and awareness purposes</strong></span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#29a587] rounded-full mt-2 mr-3" />
                <span>Promoting responsible security practices</span>
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">❌ Unacceptable Behavior</h3>
            <p className="text-gray-700 mb-3">Examples of unacceptable behavior include:</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-red-500 rounded-full mt-2 mr-3" />
                <span>The use of sexualized language or imagery, and sexual attention or advances of any kind</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-red-500 rounded-full mt-2 mr-3" />
                <span>Trolling, insulting or derogatory comments, and personal or political attacks</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-red-500 rounded-full mt-2 mr-3" />
                <span>Public or private harassment</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-red-500 rounded-full mt-2 mr-3" />
                <span><strong>Using this project&apos;s tools for malicious purposes</strong>, including creating malicious QR codes, conducting unauthorized security testing, or engaging in phishing attacks</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 shadow-sm border border-red-100/50 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Legal Disclaimer</h2>
            <p className="text-gray-700 leading-relaxed">
              The tools provided in this repository are for <strong>educational and awareness purposes only</strong>. Any malicious use of these tools is:
            </p>
            <ul className="space-y-2 text-gray-700 mt-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-red-500 rounded-full mt-2 mr-3" />
                <span>Strictly prohibited</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-red-500 rounded-full mt-2 mr-3" />
                <span>May be illegal in your jurisdiction</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-red-500 rounded-full mt-2 mr-3" />
                <span>Will result in immediate permanent ban from this community</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-red-500 rounded-full mt-2 mr-3" />
                <span>May be reported to appropriate authorities</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200/50 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Enforcement</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Instances of abusive, harassing, or otherwise unacceptable behavior may be reported to the community leaders via:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-gray-500 rounded-full mt-2 mr-3" />
                <span>
                  <a 
                    href="https://linkedin.com/in/arvidberndtsson" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#29a587] hover:text-[#238f75] underline"
                  >
                    LinkedIn: Arvid Berndtsson
                  </a>
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 bg-gray-500 rounded-full mt-2 mr-3" />
                <span>
                  <a 
                    href="https://github.com/arvid-berndtsson/qr-spoof/issues" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#29a587] hover:text-[#238f75] underline"
                  >
                    GitHub Issues
                  </a> (for less sensitive matters)
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-100 rounded-3xl p-8 shadow-sm border border-gray-200/50">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Attribution</h2>
            <p className="text-gray-700 leading-relaxed">
              This Code of Conduct is adapted from the{" "}
              <a 
                href="https://www.contributor-covenant.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#29a587] hover:text-[#238f75] underline"
              >
                Contributor Covenant
              </a>, version 2.1.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
