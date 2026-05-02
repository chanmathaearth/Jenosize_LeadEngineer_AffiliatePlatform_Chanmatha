import { LinkGeneratorForm } from "@/components/links/LinkGeneratorForm"
import { GeneratedLinkList } from "@/components/links/GeneratedLinkList"

export default function AdminLinksPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Link Generation</h1>
        <p className="text-gray-500 mt-1">Generate short affiliate links for your products under specific campaigns.</p>
      </div>

      <LinkGeneratorForm />
      
      <div className="mt-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Generated Links</h2>
        <GeneratedLinkList />
      </div>
    </div>
  )
}
