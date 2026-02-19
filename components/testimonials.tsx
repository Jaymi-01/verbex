"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "@phosphor-icons/react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const testimonials = [
  {
    quote: "Verbex AI has completely transformed our content strategy. The precision of its suggestions and the speed at which we can now produce high-quality articles are simply unparalleled. A must-have for any marketing team!",
    name: "Eleanor Vance",
    title: "Head of Content at Stellar Solutions",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces",
    rating: 5,
  },
  {
    quote: "As a freelance writer, time is money. Verbex AI not only saves me countless hours on editing but also inspires new angles for my stories. My clients are happier, and so am I!",
    name: "Marcus Thorne",
    title: "Award-winning Freelance Author",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
    rating: 5,
  },
  {
    quote: "Integrating Verbex AI into our workflow was seamless. The team collaboration features mean we're always on the same page, and the AI ensures our brand voice remains consistent across all communications.",
    name: "Dr. Anya Sharma",
    title: "Director of Communications at BioInnovate",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=faces",
    rating: 4,
  },
  {
    quote: "I was skeptical at first, but Verbex AI quickly proved its worth. It catches subtle nuances and suggests improvements I would have missed, making my academic papers far more polished.",
    name: "Professor David Kim",
    title: "Research Lead at Global University",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces",
    rating: 5,
  },
  {
    quote: "The best investment we've made this year. Our team's productivity has soared, and the quality of our external communications has never been higher thanks to Verbex AI.",
    name: "Olivia Grace",
    title: "CEO of FutureTech Startups",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=faces",
    rating: 5,
  },
];

export const Testimonials = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000, stopOnInteraction: false })]);

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4">Transformative Experiences, Real Results</h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Don't just take our word for it. Hear how Verbex AI is empowering writers and teams worldwide.
        </p>

        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="embla__slide flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-4">
                <Card className="flex flex-col h-full p-6 bg-card border-border shadow-lg">
                  <CardContent className="flex-grow text-foreground text-lg italic mb-4">
                    &ldquo;{testimonial.quote}&rdquo;
                  </CardContent>
                  <div className="flex items-center justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        weight={i < testimonial.rating ? "fill" : "regular"}
                        className={i < testimonial.rating ? "text-yellow-400" : "text-muted-foreground"}
                      />
                    ))}
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full object-cover"
                    />
                    <div className="text-left">
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
