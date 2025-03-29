import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Full Stack Development Services | ZipTangle",
  description:
    "From frontend to firmware, we build end-to-end solutions across web, mobile, and embedded platforms. Seamless, secure, and scalable development services.",
}

export default function FullStackLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

