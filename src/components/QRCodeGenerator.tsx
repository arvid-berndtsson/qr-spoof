import Link from "next/link";

interface QRCodeGeneratorProps {
  buttonText?: string;
  className?: string;
}

export default function QRCodeGenerator({
  buttonText = "Generate Awareness QR Codes",
  className = "",
}: QRCodeGeneratorProps) {
  return (
    <div className={`flex flex-col items-center space-y-6 ${className}`}>
      <Link
        href="/generate"
        className="w-full bg-gradient-to-r from-[#29a587] to-[#238f75] text-white text-center px-8 py-4 rounded-2xl hover:shadow-lg hover:shadow-[#29a587]/20 transition-all duration-200 font-medium block"
      >
        {buttonText}
      </Link>
    </div>
  );
}
