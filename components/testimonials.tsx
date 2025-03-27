// Create a new testimonials component that reflects your specializations

import Image from "next/image"

const testimonials = [
  {
    quote: "ZipTangle's Web3 expertise helped us change the planet, by...........",
    author: "Edmund Bell King, CEO",
    company: "Zip Operations ltd",
    avatar: "/images/edtestimonial.png",
  },
  {
    quote:
      "Their full stack development team built a custom enterprise solution that transformed our business operations.",
    author: "John Smith",
    company: "Enterprise Solutions LLC",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    quote:
      "ZipTangle's work on our humanitarian project has impacted thousands of lives. Their technical expertise combined with genuine care made all the difference.",
    author: "Emily Johnson",
    company: "Global Impact Initiative",
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-ziptangle-blue">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-ziptangle-light p-6 rounded-lg shadow-sm">
              <p className="text-lg mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-ziptangle-blue">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

