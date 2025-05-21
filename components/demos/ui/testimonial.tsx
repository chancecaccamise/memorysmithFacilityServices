"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface Testimonial {
  id: number
  name: string
  role: string
  content: string
  rating: number
  date: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Joseph O.",
    role: "Homeowner",
    content:
      "Memorysmith provided services to my Airbnb I ran in Savannah Georgia. They were timely, courteous, professional and competitively priced. I would recommend them without hesitation.",
    rating: 5,
    date: "3 months ago",
  },
  {
    id: 2,
    name: "Andrea K.",
    role: "Homeowner",
    content:
      "Communication is seamless, with Jon being very hands-on and always available to discuss the details. He’s excellent at breaking down problems and finding solutions without any surprises along the way. I highly recommend MemorySmith for any project, big or small!",
    rating: 5,
    date: "1 month ago",
  },
  {
    id: 3,
    name: "Farrell C.",
    role: "Homeowner",
    content:
      "As for lawn care, my properties and listings have never looked better. The meticulous attention to detail is evident in every perfectly mowed stripe and neatly edged walkway. Beyond the specific services, their overall professionalism shines through – they are reliable, proactive, and genuinely a pleasure to work with. For anyone seeking top-tier property management and lawn care, look no further. Five stars just doesn't feel like enough!",
    rating: 4,
    date: "2 months ago",
  },
  {
    id: 4,
    name: "Unknown",
    role: "Homeowner",
    content:
      "AMAZING SERVICE! Finding a company that excels in property management, lawn care, pressure washing or basically anything we need felt impossible, but Jonathan and his team- truly exceeded all expectations! Their property management is impeccable - requests are addressed promptly and efficiently, and communication is consistently clear and helpful",
    rating: 5,
    date: "4 months ago",
  },
  {
    id: 5,
    name: "Unknown",
    role: "Homeowner",
    content:
      "Jon and his trusted team at MemorySmith are hands down some of the best professionals I've had the pleasure of working with—both in my career as a property manager and personally for projects at my home. They’re incredibly knowledgeable, and you can tell they genuinely care about getting the job done right the first time.",
    rating: 5,
    date: "6 months ago",
  },
  
]

export function TestimonialCarousel() {
  return (
    <div className="relative w-full py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-4">What Our Customers Say</h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-10">
          Hear directly from our satisfied customers about their experience working with us.
        </p>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-6xl mx-auto"
      >
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
              <div className="p-1">
                <Card className="border border-gray-200 h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center mb-3">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            "h-5 w-5",
                            i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300",
                          )}
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 line-clamp-4">{testimonial.content}</p>
                    <div className="mt-auto">
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <div className="flex justify-between text-sm text-gray-500 mt-1">
                        <span>{testimonial.role}</span>
                        <span className="text-xs">{testimonial.date}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex justify-center mt-8 gap-4">
          <CarouselPrevious className="static transform-none" />
          <CarouselNext className="static transform-none" />
        </div>
      </Carousel>
    </div>
  )
}
