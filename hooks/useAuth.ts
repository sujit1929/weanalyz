"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem("token")

    if (token) {
      setIsAuthenticated(true)
    } else {
      setIsAuthenticated(false)
      router.replace("/login") // instantly redirect
    }
  }, [router])

  return { isAuthenticated }
}
