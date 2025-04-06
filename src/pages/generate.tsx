import type { Metadata } from "next";
import { useState } from "react";
import dynamic from "next/dynamic";
import { toPng, toJpeg, toSvg } from "html-to-image";
import { jsPDF } from "jspdf";
import Link from "next/link";

const QRCodeSVG = dynamic(
  () => import("qrcode.react").then((mod) => mod.QRCodeSVG),
  {
    ssr: false,
  },
);

export const metadata: Metadata = {
  title: "Generate QR Code - QR Code Security",
  description:
    "Generate QR codes to raise awareness about QR code security and quishing attacks.",
  openGraph: {
    title: "Generate QR Code - QR Code Security",
    description:
      "Generate QR codes to raise awareness about QR code security and quishing attacks.",
    url: "https://qrspoof.com/generate",
    siteName: "QR Code Security",
    images: [
      {
        url: "https://qrspoof.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "QR Code Security - Generate QR codes",
      },
    ],
    locale: "sv_SE",
    type: "website",
  },
};

export default function Generate() {
  const [url, setUrl] = useState("");
  const [qrValue, setQrValue] = useState("");
  const [error, setError] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsGenerating(true);

    try {
      // Ensure the URL has a protocol
      let processedUrl = url.trim();
      if (
        !processedUrl.startsWith("http://") &&
        !processedUrl.startsWith("https://")
      ) {
        processedUrl = "https://" + processedUrl;
      }
      setQrValue(processedUrl);
    } catch (err) {
      setError("Invalid URL format. Please enter a valid URL.");
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadImage = async (format: "png" | "jpeg" | "svg") => {
    const qrElement = document.getElementById("qr-code");
    if (!qrElement) return;

    try {
      let dataUrl;
      switch (format) {
        case "png":
          dataUrl = await toPng(qrElement);
          break;
        case "jpeg":
          dataUrl = await toJpeg(qrElement);
          break;
        case "svg":
          dataUrl = await toSvg(qrElement);
          break;
      }

      const link = document.createElement("a");
      link.download = `qr-code.${format}`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Error generating image:", err);
    }
  };

  const downloadPDF = async () => {
    const qrElement = document.getElementById("qr-code");
    if (!qrElement) return;

    try {
      const dataUrl = await toPng(qrElement);
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(dataUrl);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(dataUrl, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("qr-code.pdf");
    } catch (err) {
      console.error("Error generating PDF:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Generate QR Code
            </h1>
            <p className="text-xl text-gray-600">
              Create a QR code to raise awareness about QR code security
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
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

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="url"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Enter URL
                </label>
                <input
                  type="text"
                  id="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#29a587] focus:border-[#29a587]"
                  required
                />
              </div>

              {error && <div className="text-red-600 text-sm">{error}</div>}

              <button
                type="submit"
                disabled={isGenerating}
                className="w-full bg-[#29a587] text-white px-6 py-3 rounded-md hover:bg-[#238f75] disabled:opacity-50"
              >
                {isGenerating ? "Generating..." : "Generate QR Code"}
              </button>
            </form>
          </div>

          {qrValue && (
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="prose prose-lg max-w-none mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Preview
                </h2>
                <p className="mb-4">
                  When scanned, this QR code will first show an awareness page
                  with the following information:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>
                    The destination URL:{" "}
                    <code className="bg-gray-100 px-2 py-1 rounded">
                      {qrValue}
                    </code>
                  </li>
                  <li>Quick safety tips for scanning QR codes</li>
                  <li>A brief explanation of quishing (QR code phishing)</li>
                </ul>
                <p className="mb-4">
                  After a few seconds, users will be automatically redirected to
                  the destination URL.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-6">
                <div
                  id="qr-code"
                  className="bg-white p-4 rounded-lg border border-gray-200"
                >
                  <QRCodeSVG
                    value={qrValue}
                    size={200}
                    level="H"
                    includeMargin={true}
                  />
                </div>

                <div className="flex flex-wrap gap-4 justify-center">
                  <button
                    onClick={() => downloadImage("png")}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
                  >
                    Download PNG
                  </button>
                  <button
                    onClick={() => downloadImage("jpeg")}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
                  >
                    Download JPEG
                  </button>
                  <button
                    onClick={() => downloadImage("svg")}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
                  >
                    Download SVG
                  </button>
                  <button
                    onClick={downloadPDF}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
                  >
                    Download PDF
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="mt-8 text-center">
            <Link href="/" className="text-[#29a587] hover:text-[#238f75]">
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
