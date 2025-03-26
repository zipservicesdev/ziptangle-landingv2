import Link from "next/link"
import Image from "next/image"
import { Github, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col gap-8 py-8 md:flex-row md:py-12">
        <div className="flex-1 space-y-4">
          <div className="flex items-center space-x-3">
            <div className="relative h-10 w-10">
              <Image src="/images/logo.png" alt="ZipTangle Logo" fill className="object-contain" />
            </div>
            <h2 className="font-bold text-ziptangle-blue">ZipTangle</h2>
          </div>
          <p className="text-sm text-muted-foreground">
            Building innovative solutions for ambitious projects, enterprises, and humanitarian initiatives.
          </p>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-12 sm:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-ziptangle-blue">Solutions</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/web3" className="text-muted-foreground transition-colors hover:text-ziptangle-blue">
                  Web3 Development
                </Link>
              </li>
              <li>
                <Link href="/full-stack" className="text-muted-foreground transition-colors hover:text-ziptangle-blue">
                  Full Stack Development
                </Link>
              </li>
              <li>
                <Link href="/enterprise" className="text-muted-foreground transition-colors hover:text-ziptangle-blue">
                  Enterprise Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/humanitarian"
                  className="text-muted-foreground transition-colors hover:text-ziptangle-blue"
                >
                  Humanitarian Projects
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-ziptangle-blue">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground transition-colors hover:text-ziptangle-blue">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground transition-colors hover:text-ziptangle-blue">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-ziptangle-blue">Connect</h3>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/ziptangle"
                className="text-muted-foreground transition-colors hover:text-ziptangle-blue"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://twitter.com/ziptangle"
                className="text-muted-foreground transition-colors hover:text-ziptangle-blue"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://linkedin.com/company/ziptangle"
                className="text-muted-foreground transition-colors hover:text-ziptangle-blue"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container border-t py-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} ZipTangle, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

