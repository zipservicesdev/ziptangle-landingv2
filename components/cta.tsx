import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="bg-ziptangle-blue">
      <div className="container flex flex-col items-center gap-4 py-24 text-center md:py-32">
        <h2 className="font-bold text-3xl leading-[1.1] text-white sm:text-3xl md:text-5xl">
          Ready to bring your ambitious project to life?
        </h2>
        <p className="max-w-[42rem] leading-normal text-white/80 sm:text-xl sm:leading-8">
          Whether you're launching a Web3 platform, need a custom enterprise solution, or are working on a humanitarian
          initiative, our team is ready to help you succeed.
        </p>
        <Button size="lg" className="mt-4 bg-white text-ziptangle-blue hover:bg-white/90">
          Get Started Today
        </Button>
      </div>
    </section>
  )
}

