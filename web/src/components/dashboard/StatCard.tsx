import { ReactNode } from "react"

export function StatCard({ title, value, icon }: { title: string; value: string | number; icon: ReactNode }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex items-center gap-4">
      <div className="bg-blue-50 p-3 rounded-lg text-blue-600">
        {icon}
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
      </div>
    </div>
  )
}
