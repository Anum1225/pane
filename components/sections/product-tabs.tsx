"use client"

interface ProductTabsProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export default function ProductTabs({ activeTab, onTabChange }: ProductTabsProps) {
  const tabs = [
    { id: "vinyl-windows", label: "Vinyl Windows" },
    { id: "replacement-glass", label: "Replacement Glass" },
    { id: "patio-doors", label: "Patio Doors" },
    { id: "window-screens", label: "Window Screens" },
  ]

  return (
    <div className="flex justify-center mb-16">
      <div className="flex flex-wrap justify-center gap-8 md:gap-16">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`font-poppins font-medium text-sm transition-all duration-200 pb-2 border-b-2 ${
              activeTab === tab.id
                ? "text-primary-orange border-primary-orange" // Changed from purple-600
                : "text-gray-600 border-transparent hover:text-primary-orange hover:border-primary-orange" // Changed hover to primary-orange
            }`}
            aria-pressed={activeTab === tab.id}
            role="tab"
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  )
}
