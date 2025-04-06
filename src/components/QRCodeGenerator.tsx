import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import Link from "next/link";

interface QRCodeGeneratorProps {
  initialValue?: string;
  buttonText?: string;
  className?: string;
}

export default function QRCodeGenerator({
  initialValue = "",
  buttonText = "Generate Awareness QR Codes",
  className = "",
}: QRCodeGeneratorProps) {
  const [qrValue, setQrValue] = useState(initialValue);

  const handleGenerate = () => {
    const url = window.location.origin + "/awareness";
    setQrValue(url);
  };

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    const canvas = document.querySelector("canvas");
    if (canvas) {
      const link = document.createElement("a");
      link.download = "qr-code-security-awareness.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    }
  };

  return (
    <div className={`flex flex-col items-center space-y-6 ${className}`}>
      <button
        onClick={handleGenerate}
        className="w-full bg-[#29a587] text-white text-center px-6 py-3 rounded-lg hover:bg-[#238f75] transition-colors"
      >
        {buttonText}
      </button>
      {qrValue && (
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <a
            href="#"
            onClick={handleDownload}
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
  );
}
