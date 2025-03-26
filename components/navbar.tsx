import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-3">
          <div className="relative h-10 w-10">
            <Image src="/images/logo.png" alt="ZipTangle Logo" fill className="object-contain" />
          </div>
          <span className="text-xl font-bold text-ziptangle-blue">ZipTangle</span>
        </Link>
        <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
          <Link href="/web3" className="transition-colors hover:text-ziptangle-blue">
            Web3
          </Link>
          <Link href="/full-stack" className="transition-colors hover:text-ziptangle-blue">
            Full Stack
          </Link>
          <Link href="/enterprise" className="transition-colors hover:text-ziptangle-blue">
            Enterprise
          </Link>
          <Link href="/humanitarian" className="transition-colors hover:text-ziptangle-blue">
            Humanitarian
          </Link>
        </nav>
        <div className="flex items-center space-x-4">

          <Button variant="ghost" size="sm" className="text-ziptangle-blue hover:text-ziptangle-blue/90">
            Contact
          </Button>
          <Button size="sm" className="bg-ziptangle-blue text-white hover:bg-ziptangle-blue/90">
            Get a Demo
          </Button>
        </div>
      </div>
    </header>
  )
}

