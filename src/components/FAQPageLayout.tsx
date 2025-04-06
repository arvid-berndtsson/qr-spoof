import { ReactNode } from "react";

interface FAQPageLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
  accentColor?: string;
  icon?: ReactNode;
}

export default function FAQPageLayout({
  title,
  description,
  children,
  accentColor = "#29a587",
  icon,
}: FAQPageLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative py-16 sm:py-24"
        style={{ backgroundColor: accentColor }}
      >
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {icon && (
              <div className="mb-6">
                {icon}
              </div>
            )}
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              {title}
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          {children}
        </div>
      </div>
    </div>
  );
} 