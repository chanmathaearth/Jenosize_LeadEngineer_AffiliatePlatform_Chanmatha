import { AlertCircle } from "lucide-react"

export function ErrorMessage({ message }: { message: string }) {
  return (
    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded flex items-center gap-2">
      <AlertCircle className="h-5 w-5" />
      <p>{message}</p>
    </div>
  )
}
