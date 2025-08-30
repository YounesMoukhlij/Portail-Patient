type FilterTabsProps = {
  tabs: string[];
  active: string;
  onChange: (tab: string) => void;
};

export default function FilterTabs({ tabs, active, onChange }: FilterTabsProps) {
  return (
    <div className="flex gap-2 mb-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`px-4 py-2 rounded-full border transition-colors font-medium text-sm ${
            active === tab
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white dark:bg-gray-800 text-blue-600 border-blue-200 hover:bg-blue-50 dark:hover:bg-blue-900"
          }`}
          onClick={() => onChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
