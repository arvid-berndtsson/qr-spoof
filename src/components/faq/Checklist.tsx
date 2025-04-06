import { ReactNode } from "react";

interface ChecklistItem {
  title: string;
  description: string;
}

interface ChecklistProps {
  title: string;
  items: ChecklistItem[];
  icon?: ReactNode;
  accentColor?: string;
  successMessage?: string;
}

export default function Checklist({
  title,
  items,
  icon = "✓",
  accentColor = "#10B981",
  successMessage = "Following these safety measures can prevent 99% of security incidents.",
}: ChecklistProps) {
  return (
    <div className="bg-white rounded-lg">
      <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg
              className="h-5 w-5 text-green-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-green-700">{successMessage}</p>
          </div>
        </div>
      </div>

      <div className="bg-white border border-green-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-green-600 mb-3">{title}</h3>
        <ul className="space-y-4">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-green-500 mr-2">{icon}</span>
              <div>
                <strong>{item.title}</strong>
                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
