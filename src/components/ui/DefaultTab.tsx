import { useState, ReactNode } from "react";

type TabItem = {
  label: string;
  component: ReactNode;
};

type DefaultTabProps = {
  tabs: TabItem[];
};

const DefaultTab = ({ tabs }: DefaultTabProps) => {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  const activeTabContent = tabs.find((tab) => tab.label === activeTab)?.component;

  return (
    <div>
      <div className="flex border-b border-gray-200 dark:border-gray-700">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(tab.label)}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === tab.label
                ? "border-b-2 border-blue-500 text-blue-600 dark:text-blue-400"
                : "text-gray-500 hover:text-blue-500"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-4 bg-white dark:bg-gray-800 rounded-b-lg">
        {activeTabContent}
      </div>
    </div>
  );
};

export default DefaultTab;
