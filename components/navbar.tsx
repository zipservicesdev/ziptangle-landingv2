import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-ziptangle-blue/95 backdrop-blur supports-[backdrop-filter]:bg-ziptangle-blue/60">
      <div className="container flex h-20 max-w-screen-2xl items-center">
        <Link href="/" className="mr-8 flex items-center space-x-4">
          <div className="relative h-14 w-14">
            <Image src="/images/logo.png" alt="ZipTangle Logo" fill className="object-contain" />
          </div>
          <span className="text-2xl font-bold text-white">ZipTangle</span>
        </Link>
        <nav className="flex flex-1 items-center space-x-8 text-base font-medium">
          <Link href="/web3" className="text-white/80 transition-colors hover:text-white">
            Web3
          </Link>
          <Link href="/full-stack" className="text-white/80 transition-colors hover:text-white">
            Full Stack
          </Link>
          <Link href="/enterprise" className="text-white/80 transition-colors hover:text-white">
            Enterprise
          </Link>
          <Link href="/humanitarian" className="text-white/80 transition-colors hover:text-white">
            Humanitarian
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="default" className="text-white hover:bg-white/10 hover:text-white">
            Contact
          </Button>
          <Button size="default" className="bg-white text-ziptangle-blue hover:bg-white/90">
            Get a Demo
          </Button>
        </div>
      </div>
    </header>
  )
}

