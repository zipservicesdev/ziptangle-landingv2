import { Brain, Cloud, Shield, Zap } from "lucide-react"

const features = [
  {
    name: "Web3 Development",
    description:
      "Blockchain solutions, smart contracts, and decentralized applications built with security and scalability in mind.",
    icon: Brain,
  },
  {
    name: "Full Stack Excellence",
    description:
      "End-to-end development services using cutting-edge technologies for ambitious, high-performance applications.",
    icon: Zap,
  },
  {
    name: "Enterprise Solutions",
    description: "Custom software tailored to your organization's unique challenges and opportunities.",
    icon: Cloud,
  },
  {
    name: "Humanitarian Innovation",
    description: "Technology with purpose - creating novel solutions for humanitarian projects and social impact.",
    icon: Shield,
  },
]

export default function Features() {
  return (
    <section className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] text-ziptangle-blue sm:text-3xl md:text-5xl">
          Specialized Expertise
        </h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Discover how ZipTangle can transform your ambitious ideas into reality with our specialized development
          services.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {features.map((feature) => (
          <div
            key={feature.name}
            className="relative overflow-hidden rounded-lg border bg-white p-8 shadow-sm transition-all hover:shadow-md"
          >
            <div className="flex items-center gap-4">
              <feature.icon className="h-8 w-8 text-ziptangle-blue" />
              <h3 className="font-bold text-ziptangle-blue">{feature.name}</h3>
            </div>
            <p className="mt-2 text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

