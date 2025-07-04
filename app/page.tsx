"use client"

import useAuth from "@/hooks/useAuth"
import MainPage from "@/Components/SystemUI/HelpDesk/UserProfle/View/MainPage"

export default function Home() {
  const { isAuthenticated } = useAuth()
  console.log("isAuthenticated:", isAuthenticated)
  

  if (isAuthenticated === null) {
    return <p className="p-4">Checking auth...</p>
  }

  if (!isAuthenticated) return null // won't render anything

  return <MainPage />
}
