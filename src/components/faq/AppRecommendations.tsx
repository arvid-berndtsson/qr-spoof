
interface App {
  name: string;
  description: string;
}

interface AppCategory {
  title: string;
  apps: App[];
}

interface AppRecommendationsProps {
  categories: AppCategory[];
  features: App[];
  accentColor?: string;
}

export default function AppRecommendations({
  categories,
  features,
  accentColor = "#10B981",
}: AppRecommendationsProps) {
  return (
    <div className="bg-white rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-600 mb-3">{category.title}</h3>
            <ul className="space-y-4">
              {category.apps.map((app, appIndex) => (
                <li key={appIndex}>
                  <strong>{app.name}</strong>
                  <p className="text-sm text-gray-600 mt-1">{app.description}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-green-600 mb-3">Features to Look For</h3>
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index}>
                <strong>{feature.name}</strong>
                <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
} 