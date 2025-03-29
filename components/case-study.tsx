"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export default function CaseStudy() {
  return (
    <section className="py-20 bg-gray-50 border-y border-gray-200">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-ziptangle-blue mb-4">Featured Case Study</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how we're making a difference with innovative technology solutions for humanitarian causes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg flex items-center justify-center">
            <Image
              src="/power2ukraine-logo.png"
              alt="Power2Ukraine Logo"
              width={500}
              height={200}
              className="object-contain"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-ziptangle-blue">Power2Ukraine</h3>
            <p className="text-gray-600">
              Power2Ukraine is an innovative humanitarian initiative we're currently developing to provide sustainable
              power solutions to communities in Ukraine affected by infrastructure damage. This project combines
              renewable energy technology with smart distribution systems to ensure essential services remain
              operational.
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-ziptangle-blue">The Challenge</h4>
                <p className="text-gray-600">
                  Widespread power outages in Ukraine have left critical facilities like hospitals, schools, and
                  community centres without reliable electricity, impacting essential services and community resilience.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-ziptangle-blue">Our Solution</h4>
                <p className="text-gray-600">
                  We're developing a network of solar-powered generators with battery storage, managed through a
                  custom-built platform that optimises power distribution based on community needs and priorities.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-ziptangle-blue">Impact</h4>
                <p className="text-gray-600">
                  The Power2Ukraine initiative aims to restore reliable power to essential services, improving
                  healthcare delivery, educational continuity, and community support during ongoing infrastructure
                  challenges.
                </p>
              </div>
            </div>

            <Button
              className="bg-ziptangle-blue text-white hover:bg-ziptangle-blue/90 mt-4"
              onClick={() => window.open("https://power2ukraine.info", "_blank")}
            >
              Learn More <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

