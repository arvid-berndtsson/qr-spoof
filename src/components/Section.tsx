export default function Section({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-white p-8 rounded-2xl shadow-sm border border-gray-100 ${className}`}
    >
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h2>
      <div className="text-gray-600 leading-relaxed">{children}</div>
    </div>
  );
}
