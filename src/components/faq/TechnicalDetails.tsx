import { ReactNode } from "react";

interface TechnicalDetail {
  title: string;
  description: string;
  icon?: string;
}

interface TechnicalDetailsProps {
  title: string;
  description?: string;
  details: TechnicalDetail[];
  accentColor?: string;
}

export default function TechnicalDetails({
  title,
  description,
  details,
  accentColor = "#29a587",
}: TechnicalDetailsProps) {
  return (
    <div>
      {description && (
        <div className="prose prose-lg max-w-none mb-6">
          <p className="text-xl text-gray-700">{description}</p>
        </div>
      )}
      
      <ul className="list-none space-y-6">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start">
            <span className="text-[#29a587] mr-2">{detail.icon || "📊"}</span>
            <div>
              <strong className="text-lg font-semibold text-gray-900">{detail.title}</strong>
              <p className="mt-2 text-gray-700">{detail.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
} 