"use client"

import { ArrowRight, BarChart3, PenTool, Search, Share2, MousePointer } from "lucide-react"
import { useState } from "react"

export default function Services() {
  const [hoveredService, setHoveredService] = useState(null)

  const services = [
    {
      name: "Analytics and Data Insights",
      icon: BarChart3,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Kn0AgCm9iVmXc27Qb4p17K1u0GsyEY.png",
      description: "Transform raw data into actionable insights that drive strategic business decisions and growth.",
    },
    {
      name: "Content Marketing",
      icon: PenTool,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FUCcQrQ4B5g44QFMBnUaAsOa4pwG9w.png",
      description: "Create compelling content that resonates with your audience and builds lasting brand connections.",
    },
    {
      name: "Search Engine Marketing",
      icon: Search,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yfxk6KN9Ecc4xx4delOGwO8coHKyBD.png",
      description: "Boost your online visibility and drive qualified traffic through strategic search optimization.",
    },
    {
      name: "Social Media Marketing",
      icon: Share2,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-frrL5Lv23Vtwhxrw5gvF6kNFTeFiZG.png",
      description: "Elevate your brand with impactful social media strategies that engage and convert.",
    },
    {
      name: "Pay-Per-Click Advertising",
      icon: MousePointer,
      image: "/placeholder.svg?height=300&width=400",
      description: "Maximize ROI with targeted advertising campaigns that deliver measurable results.",
    },
  ]

  return (
    <section className="bg-emerald-800 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-16">
          <div className="lg:max-w-2xl">
            <p className="text-emerald-200 text-sm font-medium tracking-wider uppercase mb-4">OUR SERVICES</p>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-8">
              <span className="relative">
                Services
                <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400"></span>
              </span>{" "}
              We're Offering
            </h2>
            <p className="text-emerald-200 text-lg">
              Discover a spectrum of cutting-edge digital marketing services tailored to elevate your online presence,
              drive engagement.
            </p>
          </div>

          <div className="mt-8 lg:mt-0 lg:pt-16">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full flex items-center transition-colors">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="space-y-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group cursor-pointer py-6 border-b border-emerald-700/30 relative"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6 flex-1">
                  <h3
                    className={`text-xl lg:text-2xl font-normal transition-colors ${
                      hoveredService === index ? "text-yellow-400" : "text-emerald-100"
                    }`}
                  >
                    {service.name}
                  </h3>
                </div>

                <div
                  className={`absolute right-16 top-1/2 -translate-y-1/2 flex items-center gap-4 bg-emerald-700/80 backdrop-blur-sm rounded-lg p-4 transition-opacity duration-300 z-10 ${
                    hoveredService === index ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="relative overflow-hidden rounded-lg w-24 h-20 flex-shrink-0">
                    <img
                      src={services[index]?.image || "/placeholder.svg"}
                      alt={services[index]?.name || ""}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-emerald-100 text-sm leading-relaxed max-w-md">{services[index]?.description}</p>
                </div>

                <div
                  className={`w-10 h-10 rounded-full border-2 border-emerald-400 flex items-center justify-center hover:bg-emerald-400 transition-all duration-300 flex-shrink-0 ${
                    hoveredService === index ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <ArrowRight className="h-4 w-4 text-emerald-400 group-hover:text-emerald-800" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
