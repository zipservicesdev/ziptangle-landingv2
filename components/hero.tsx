import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="container flex min-h-[calc(100vh-5rem)] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-24 text-center md:py-32">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight text-ziptangle-blue sm:text-5xl md:text-6xl lg:text-7xl">
          Web3 & Full Stack
          <br />
          <span className="text-ziptangle-blue/70">Development Experts</span>
        </h1>
        <p className="mx-auto max-w-[42rem] leading-normal text-gray-600 sm:text-xl sm:leading-8">
          Empowering ambitious projects with cutting-edge technology solutions. From blockchain innovations to custom
          enterprise systems and humanitarian initiatives, we're building the future.
        </p>
      </div>
      <div className="flex gap-4 pt-4">
        <Button size="lg" className="bg-ziptangle-blue text-white hover:bg-ziptangle-blue/90">
          Explore Solutions
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="border-ziptangle-blue text-ziptangle-blue hover:bg-ziptangle-blue/10"
        >
          Schedule a Demo
        </Button>
      </div>
    </section>
  )
}

