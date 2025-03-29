import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Coins, Shield, Database, HardDrive, LayoutDashboard } from "lucide-react"

export default function Web3Page() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Background overlay */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-ziptangle-blue/5 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-ziptangle-accent/5 blur-[100px]" />
      </div>

      <div className="relative z-10">
        <Navbar />

        {/* Hero Section */}
        <section className="container py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-ziptangle-blue sm:text-5xl md:text-6xl">Web3</h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">Powering the Future of IoT and DePIN with Web3</p>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              At Ziptangle.io, we're bridging the physical and digital worlds by combining the power of IoT with
              decentralised infrastructure. Whether you're building the next-generation DePIN network, tokenising
              real-world assets, or enabling secure device-to-device communication, our Web3 services are built to
              support scalable, secure, and interoperable ecosystems.
            </p>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-16 bg-gray-50 border-y border-gray-200">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-ziptangle-blue">Our Web3 Capabilities for IoT & DePIN Projects</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <Code className="h-10 w-10 text-ziptangle-blue mb-4" />
                <h3 className="text-xl font-bold text-ziptangle-blue mb-3">Smart Contract Architecture</h3>
                <p className="text-gray-600">
                  We design and deploy robust, gas-efficient smart contracts that automate device interactions, handle
                  tokenised incentives, and govern decentralised infrastructure operations.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <Coins className="h-10 w-10 text-ziptangle-blue mb-4" />
                <h3 className="text-xl font-bold text-ziptangle-blue mb-3">Tokenised Incentive Systems</h3>
                <p className="text-gray-600">
                  Power your DePIN network with custom token economies that reward participation, encourage hardware
                  deployment, and drive ecosystem growth.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <Shield className="h-10 w-10 text-ziptangle-blue mb-4" />
                <h3 className="text-xl font-bold text-ziptangle-blue mb-3">Device Identity & Authentication</h3>
                <p className="text-gray-600">
                  Utilise blockchain-based identity to enable secure onboarding, verification, and access control for
                  connected hardware.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <HardDrive className="h-10 w-10 text-ziptangle-blue mb-4" />
                <h3 className="text-xl font-bold text-ziptangle-blue mb-3">IoT Blockchain Integration</h3>
                <p className="text-gray-600">
                  Connect devices to smart contracts using lightweight protocols and middleware that sync real-world
                  data with on-chain logic.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <Database className="h-10 w-10 text-ziptangle-blue mb-4" />
                <h3 className="text-xl font-bold text-ziptangle-blue mb-3">Decentralised Data & Storage</h3>
                <p className="text-gray-600">
                  Store sensor data, usage logs, or proofs of location using decentralised storage solutions like IPFS
                  or Arweave to ensure transparency and data integrity.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <LayoutDashboard className="h-10 w-10 text-ziptangle-blue mb-4" />
                <h3 className="text-xl font-bold text-ziptangle-blue mb-3">Custom dApps & Dashboards</h3>
                <p className="text-gray-600">
                  Build intuitive interfaces for users and operators to manage devices, track token rewards, visualise
                  network health, and more?powered by Web3.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="container py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-ziptangle-blue text-center mb-10">Why Choose Ziptangle.io?</h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Ziptangle.io understands the unique demands of decentralised infrastructure. From low-power edge devices
                to real-time token settlements, we architect solutions that are resilient, future-ready, and optimised
                for the physical layer. Our experience spans across blockchain, embedded systems, and tokenomics?giving
                you a true full-stack partner in launching your DePIN or IoT Web3 venture.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed font-medium">
                Web3 isn't just a buzzword?it's the backbone of the new machine economy. Let Ziptangle.io help you build
                it.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-ziptangle-blue">
          <div className="container flex flex-col items-center gap-4 py-16 text-center">
            <h2 className="font-bold text-3xl leading-[1.1] text-white sm:text-3xl md:text-4xl max-w-2xl">
              Ready to power your IoT ecosystem with Web3 technology?
            </h2>
            <p className="max-w-[42rem] leading-normal text-white/80 sm:text-lg sm:leading-8">
              Contact us today to discuss how we can help bring your decentralised infrastructure project to life.
            </p>
            <Button size="lg" className="mt-4 bg-white text-ziptangle-blue hover:bg-white/90">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}
