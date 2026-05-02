import { redirect } from "next/navigation"

export default async function GoPage({ params }: { params: Promise<{ shortCode: string }> }) {
  const { shortCode } = await params
  
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"
  
  // Redirect to the backend which handles tracking and final redirection
  redirect(`${apiUrl}/api/go/${shortCode}`)
}
