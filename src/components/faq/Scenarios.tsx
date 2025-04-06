
interface Scenario {
  title: string;
  description: string;
  tip: string;
}

interface ScenariosProps {
  scenarios: Scenario[];
  accentColor?: string;
}

export default function Scenarios({
  scenarios,
  accentColor = "#10B981",
}: ScenariosProps) {
  return (
    <div className="bg-white rounded-lg">
      <div className="space-y-6">
        {scenarios.map((scenario, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-600 mb-3">{scenario.title}</h3>
            <p className="mb-4 text-gray-700">
              {scenario.description}
            </p>
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="text-sm text-gray-600">
                <strong>Tip:</strong> {scenario.tip}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 