type HealthTip = {
  categorie: string;
  message: string;
};

export default function HealthTipCard({ tip }: { tip: HealthTip }) {
  return (
    <div className="rounded-lg border p-4 mb-3 shadow-sm bg-green-50 dark:bg-green-900">
      <div className="font-semibold text-green-700 dark:text-green-200 mb-1">{tip.categorie}</div>
      <div className="text-gray-800 dark:text-gray-100">{tip.message}</div>
    </div>
  );
}
