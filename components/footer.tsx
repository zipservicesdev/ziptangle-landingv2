import Link from "next/link"
import Image from "next/image"
import { Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container flex flex-col gap-8 py-8 md:flex-row md:py-12">
        <div className="flex-1 space-y-4">
          <div className="flex items-center space-x-3">
            <div className="relative h-10 w-10">
              <Image src="/images/logo.png" alt="ZipTangle Logo" fill className="object-contain" />
            </div>
            <h2 className="font-bold text-white">ZipTangle</h2>
          </div>
          <p className="text-sm text-gray-400">
            Building innovative solutions for ambitious projects, enterprises, and humanitarian initiatives.
          </p>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-12 sm:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-white">Solutions</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/web3" className="text-gray-400 transition-colors hover:text-white">
                  Web3 Development
                </Link>
              </li>
              <li>
                <Link href="/full-stack" className="text-gray-400 transition-colors hover:text-white">
                  Full Stack Development
                </Link>
              </li>
              <li>
                <Link href="/enterprise" className="text-gray-400 transition-colors hover:text-white">
                  Enterprise Solutions
                </Link>
              </li>
              <li>
                <Link href="/humanitarian" className="text-gray-400 transition-colors hover:text-white">
                  Humanitarian Projects
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-white">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-gray-400 transition-colors hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 transition-colors hover:text-white">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-white">Connect</h3>
            <div className="flex space-x-4">
              <Link href="https://twitter.com/ziptangle" className="text-gray-400 transition-colors hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://linkedin.com/company/ziptangle"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container border-t border-gray-800 py-6">
        <p className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} ZipTangle, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

