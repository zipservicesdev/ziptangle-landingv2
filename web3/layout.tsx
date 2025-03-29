import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Web3 Development Services | ZipTangle",
  description:
    "Powering the future of IoT and DePIN with Web3 technology. Build scalable, secure, and interoperable ecosystems with ZipTangle's Web3 expertise.",
}

export default function Web3Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

