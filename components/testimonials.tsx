// Create a new testimonials component that reflects your specialisations

import Image from "next/image"

const testimonials = [
  {
    quote: "ZipTangle's Web3 expertise helped us launch our DeFi platform ahead of schedule and under budget.",
    author: "Edmund Bell-King",
    company: "ZipOps, CEO",
    avatar: "/edmund-bell-king.png",
  },
  {
    quote:
      "Their full stack development team built a custom enterprise solution that transformed our business operations.",
    author: "Denise Dekopf",
    company: "Dedek Data",
    avatar: "/denise-dekopf.jpeg",
  },
  {
    quote:
      "ZipTangle's work on our humanitarian project has impacted thousands of lives. Their technical expertise combined with genuine care made all the difference.",
    author: "Roger Morden",
    company: "RM Agritech Ltd",
    avatar: "/roger-morden.jpeg",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-ziptangle-blue">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
              <p className="text-lg mb-6 text-gray-700">"{testimonial.quote}"</p>
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

