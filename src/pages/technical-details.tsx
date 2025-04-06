import { Metadata } from "next";
import Link from "next/link";
import FAQPageLayout from "../components/FAQPageLayout";
import Section from "../components/Section";
import TechnicalDetails from "../components/faq/TechnicalDetails";

export const runtime = "experimental-edge";

export const metadata: Metadata = {
  title: "Technical Details | QR Code Security Guide",
  description:
    "Learn about the technical aspects of QR codes, including encoding, error correction, and data capacity.",
  openGraph: {
    title: "Technical Details | QR Code Security Guide",
    description:
      "Learn about the technical aspects of QR codes, including encoding, error correction, and data capacity.",
    type: "website",
    locale: "en_US",
    siteName: "QR Spoof",
  },
};

export default function TechnicalDetailsPage() {
  const structureDetails = [
    {
      title: "Finder Patterns",
      description:
        "Three identical position detection patterns located at the corners (except bottom-right). These help scanners identify and orient the code. Each finder pattern consists of a 7×7 black square with a 5×5 white square inside, surrounded by a 1-module black border.",
      icon: "🔍",
    },
    {
      title: "Alignment Patterns",
      description:
        "Smaller square patterns that help correct distortion. The number of alignment patterns increases with the QR code version (size). Each alignment pattern is a 5×5 black square with a 3×3 white square inside, surrounded by a 1-module black border.",
      icon: "📊",
    },
    {
      title: "Timing Patterns",
      description:
        "Alternating black and white modules that help determine the size of the data matrix. The timing pattern runs horizontally and vertically between the finder patterns.",
      icon: "📏",
    },
    {
      title: "Format Information",
      description:
        "Contains error correction level and mask pattern used for the QR code. The format information is encoded using a (15,5) BCH code, allowing for error correction of up to 3 bits.",
      icon: "🔢",
    },
    {
      title: "Data and Error Correction Codewords",
      description:
        "The actual encoded data and error correction information. Data is encoded in 8-bit codewords, and error correction codewords are generated using Reed-Solomon error correction.",
      icon: "📦",
    },
  ];

  const errorCorrectionDetails = [
    {
      title: "Level L (Low)",
      description:
        "7% of codewords can be restored. Uses Reed-Solomon code with generator polynomial g(x) = (x - α⁰)(x - α¹)...(x - αⁿ⁻¹), where α is a primitive element of GF(2⁸).",
      icon: "L",
    },
    {
      title: "Level M (Medium)",
      description:
        "15% of codewords can be restored. The Reed-Solomon code is constructed over GF(2⁸) with primitive polynomial p(x) = x⁸ + x⁴ + x³ + x² + 1.",
      icon: "M",
    },
    {
      title: "Level Q (Quartile)",
      description:
        "25% of codewords can be restored. Error correction uses systematic encoding where the message polynomial m(x) is multiplied by xⁿ⁻ᵏ and divided by g(x) to get the remainder r(x).",
      icon: "Q",
    },
    {
      title: "Level H (High)",
      description:
        "30% of codewords can be restored. The final codeword is c(x) = m(x) × xⁿ⁻ᵏ + r(x), where n is the codeword length and k is the message length.",
      icon: "H",
    },
  ];

  const encodingDetails = [
    {
      title: "Numeric Mode",
      description:
        "Stores numbers (0-9) most efficiently, using 3.3 bits per digit. The data is divided into groups of 3 digits, each group encoded into 10 bits: 3 digits = 10 bits (3.33 bits/digit).",
      icon: "🔢",
    },
    {
      title: "Alphanumeric Mode",
      description:
        "Stores uppercase letters, numbers, and some symbols, using 5.5 bits per character. Characters are encoded in pairs, with each pair using 11 bits: 2 characters = 11 bits (5.5 bits/character).",
      icon: "🔤",
    },
    {
      title: "Byte Mode",
      description:
        "Stores any 8-bit data, including lowercase letters and special characters, using 8 bits per character. Each byte is encoded directly using its 8-bit value.",
      icon: "💾",
    },
    {
      title: "Kanji Mode",
      description:
        "Stores Japanese characters efficiently, using 13 bits per character. Characters are encoded using their Shift JIS values, with each character using 13 bits.",
      icon: "🈯",
    },
  ];

  const versionDetails = [
    {
      title: "Version 1-40",
      description:
        "QR codes come in 40 versions, with version 1 being 21×21 modules and each subsequent version adding 4 modules per side. Version 40 is 177×177 modules.",
      icon: "📐",
    },
    {
      title: "Module Size",
      description:
        "Each module (black or white square) represents one bit of data. The minimum module size is typically 0.33mm × 0.33mm for reliable scanning.",
      icon: "🔲",
    },
    {
      title: "Quiet Zone",
      description:
        "A 4-module wide white border around the QR code is required for proper scanning. This helps scanners distinguish the code from its surroundings.",
      icon: "⬜",
    },
  ];

  return (
    <FAQPageLayout
      title="Technical Details"
      description="Learn about the technical aspects of QR codes, including encoding, error correction, and data capacity."
      accentColor="#29a587"
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
      <Section title="QR Code Structure">
        <div className="prose prose-lg max-w-none mb-6">
          <p>
            A QR code is a two-dimensional barcode that consists of black and
            white modules arranged in a square grid. The structure is carefully
            designed to allow for efficient data storage and reliable scanning.
          </p>
        </div>

        <TechnicalDetails
          title="Key Components"
          description="A QR code consists of several key components that work together to store and protect data:"
          details={structureDetails}
        />

        <div className="prose prose-lg max-w-none mt-6">
          <p>
            The arrangement of these components follows a specific pattern to
            ensure reliable scanning and error correction. The finder patterns
            help scanners locate and orient the code, while the alignment
            patterns correct for perspective distortion.
          </p>
        </div>
      </Section>

      <Section title="Error Correction">
        <div className="prose prose-lg max-w-none mb-6">
          <p>
            QR codes use Reed-Solomon error correction to ensure data integrity.
            This mathematical technique allows the code to be read even if parts
            of it are damaged or obscured.
          </p>
        </div>

        <TechnicalDetails
          title="Reed-Solomon Error Correction"
          description="QR codes use Reed-Solomon error correction with four levels:"
          details={errorCorrectionDetails}
        />

        <div className="prose prose-lg max-w-none mt-6">
          <p>
            The error correction process involves encoding the data using a
            generator polynomial and creating parity codewords. During decoding,
            the syndrome polynomial is calculated to detect and correct errors.
          </p>
        </div>
      </Section>

      <Section title="Data Encoding">
        <div className="prose prose-lg max-w-none mb-6">
          <p>
            QR codes support multiple encoding modes to efficiently store
            different types of data. Each mode is optimized for specific
            character sets and uses different bit lengths per character.
          </p>
        </div>

        <TechnicalDetails
          title="Encoding Modes"
          description="QR codes support four different encoding modes to efficiently store different types of data:"
          details={encodingDetails}
        />

        <div className="prose prose-lg max-w-none mt-6">
          <p>
            The encoding process begins with a mode indicator (4 bits) followed
            by a character count indicator. The actual data is then encoded
            according to the selected mode&apos;s rules.
          </p>
        </div>
      </Section>

      <Section title="Version and Size">
        <div className="prose prose-lg max-w-none mb-6">
          <p>
            QR codes come in different versions (sizes) to accommodate varying
            amounts of data. The version number determines the size of the code
            and its data capacity.
          </p>
        </div>

        <TechnicalDetails
          title="Version Information"
          description="QR codes have specific size and capacity characteristics:"
          details={versionDetails}
        />

        <div className="prose prose-lg max-w-none mt-6">
          <p>
            The total number of modules in a QR code is calculated as (21 + 4 ×
            (version - 1))². For example, version 1 has 21×21 = 441 modules,
            while version 40 has 177×177 = 31,329 modules.
          </p>
        </div>
      </Section>

      <Section title="Data Capacity">
        <div className="prose prose-lg max-w-none">
          <p className="mb-6">
            The amount of data a QR code can store depends on its version (size)
            and error correction level:
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Version
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Modules
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Numeric
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Alphanumeric
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Binary
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">1</td>
                  <td className="px-6 py-4 whitespace-nowrap">21×21</td>
                  <td className="px-6 py-4 whitespace-nowrap">41</td>
                  <td className="px-6 py-4 whitespace-nowrap">25</td>
                  <td className="px-6 py-4 whitespace-nowrap">17</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">10</td>
                  <td className="px-6 py-4 whitespace-nowrap">57×57</td>
                  <td className="px-6 py-4 whitespace-nowrap">652</td>
                  <td className="px-6 py-4 whitespace-nowrap">395</td>
                  <td className="px-6 py-4 whitespace-nowrap">271</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">40</td>
                  <td className="px-6 py-4 whitespace-nowrap">177×177</td>
                  <td className="px-6 py-4 whitespace-nowrap">7,089</td>
                  <td className="px-6 py-4 whitespace-nowrap">4,296</td>
                  <td className="px-6 py-4 whitespace-nowrap">2,953</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Section>
    </FAQPageLayout>
  );
}
