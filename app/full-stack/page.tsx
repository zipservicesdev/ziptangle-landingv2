import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Layers, Server, Smartphone, Cpu, DatabaseIcon, Cloud } from "lucide-react"

export default function FullStackPage() {
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
            <h1 className="text-4xl font-bold tracking-tight text-ziptangle-blue sm:text-5xl md:text-6xl">
              Full Stack Development
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              From Frontend to Firmware—We Build End-to-End Solutions
            </p>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Ziptangle.io delivers full stack development services designed to power modern, high-performance
              applications across web, mobile, and embedded platforms. Whether you're launching a consumer-facing app,
              an admin dashboard, or the backend APIs for an IoT network, we provide the technical depth and product
              expertise to bring your vision to life—seamlessly, securely, and at scale.
            </p>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-16 bg-gray-50 border-y border-gray-200">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-ziptangle-blue">Our Full Stack Capabilities Include</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <Layers className="h-10 w-10 text-ziptangle-blue mb-4" />
                <h3 className="text-xl font-bold text-ziptangle-blue mb-3">Frontend Development</h3>
                <p className="text-gray-600">
                  Responsive, intuitive interfaces built with modern frameworks like React, Next.js, and Vue. We focus
                  on speed, accessibility, and UX that keeps users engaged.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <Server className="h-10 w-10 text-ziptangle-blue mb-4" />
                <h3 className="text-xl font-bold text-ziptangle-blue mb-3">Backend Engineering</h3>
                <p className="text-gray-600">
                  Scalable APIs and real-time infrastructure using Node.js, Go, Python, and Rust. From microservices to
                  monoliths, we build reliable and maintainable backend systems.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <Smartphone className="h-10 w-10 text-ziptangle-blue mb-4" />
                <h3 className="text-xl font-bold text-ziptangle-blue mb-3">Mobile App Development</h3>
                <p className="text-gray-600">
                  Cross-platform apps using Flutter or React Native, or fully native apps for iOS and Android—optimised
                  for performance and smooth device integration.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <Cpu className="h-10 w-10 text-ziptangle-blue mb-4" />
                <h3 className="text-xl font-bold text-ziptangle-blue mb-3">Embedded & Firmware Engineering</h3>
                <p className="text-gray-600">
                  Specialised support for IoT devices, microcontrollers, and edge computing. We write secure, efficient
                  firmware that interfaces with hardware and cloud services.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <DatabaseIcon className="h-10 w-10 text-ziptangle-blue mb-4" />
                <h3 className="text-xl font-bold text-ziptangle-blue mb-3">Database Design & Management</h3>
                <p className="text-gray-600">
                  From SQL to NoSQL, time-series to graph databases, we architect data models that support your
                  application's speed, flexibility, and scale.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <Cloud className="h-10 w-10 text-ziptangle-blue mb-4" />
                <h3 className="text-xl font-bold text-ziptangle-blue mb-3">DevOps & Infrastructure</h3>
                <p className="text-gray-600">
                  CI/CD pipelines, container orchestration (Docker, Kubernetes), and cloud-native deployments across
                  AWS, GCP, and Azure. We ensure your stack is reliable, resilient, and ready for production.
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
                Our strength lies in seamlessly integrating every layer of the tech stack—from user interface to server
                logic to device firmware. With cross-functional expertise in Web3, IoT, and modern software
                architecture, Ziptangle.io doesn't just code—we co-create products that are future-ready, scalable, and
                aligned with your business goals.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Whether you're building a data-driven dashboard, a decentralised platform, or the backend for a physical
                device network, we're here to take you from MVP to market—and beyond.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed font-medium">
                Your stack. Our mission. Let's build something remarkable.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-ziptangle-blue">
          <div className="container flex flex-col items-center gap-4 py-16 text-center">
            <h2 className="font-bold text-3xl leading-[1.1] text-white sm:text-3xl md:text-4xl max-w-2xl">
              Ready to build your next-generation application?
            </h2>
            <p className="max-w-[42rem] leading-normal text-white/80 sm:text-lg sm:leading-8">
              Contact us today to discuss how our full stack development expertise can bring your vision to life.
            </p>
            <Button size="lg" className="mt-4 bg-white text-ziptangle-blue hover:bg-white/90">
              Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}

