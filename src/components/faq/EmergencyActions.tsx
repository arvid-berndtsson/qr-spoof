
interface Action {
  title: string;
  description: string;
}

interface EmergencyActionsProps {
  immediateActions: Action[];
  followUpActions: Action[];
  accentColor?: string;
  warningColor?: string;
}

export default function EmergencyActions({
  immediateActions,
  followUpActions,
  accentColor = "#10B981",
  warningColor = "#EF4444",
}: EmergencyActionsProps) {
  return (
    <div className="bg-white rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-red-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-red-600 mb-3">Immediate Actions</h3>
          <ul className="space-y-4">
            {immediateActions.map((action, index) => (
              <li key={index} className="flex items-start">
                <span className="text-red-500 mr-2">!</span>
                <div>
                  <strong>{action.title}</strong>
                  <p className="text-sm text-gray-600 mt-1">{action.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white border border-red-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-red-600 mb-3">If You Entered Information</h3>
          <ul className="space-y-4">
            {followUpActions.map((action, index) => (
              <li key={index} className="flex items-start">
                <span className="text-red-500 mr-2">!</span>
                <div>
                  <strong>{action.title}</strong>
                  <p className="text-sm text-gray-600 mt-1">{action.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
} 