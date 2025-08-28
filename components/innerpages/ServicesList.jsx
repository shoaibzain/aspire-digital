import { Badge, CheckCircle } from "lucide-react";
import { Button } from "../ui/button";

export default function ServicesList() {
      const services = [
    "Custom Website Design & Development",
    "E-commerce Solutions (Shopify, WooCommerce)",
    "WordPress Development & Customization",
    "Landing Page Design & Optimization",
    "UI/UX Design & Prototyping",
    "Website Redesign & Modernization",
    "Progressive Web Apps (PWA)",
    "API Integration & Development",
    "Content Management Systems",
    "Website Maintenance & Support",
  ]  
  const technologies = [
    "React",
    "Next.js",
    "Vue.js",
    "Angular",
    "WordPress",
    "Shopify",
    "Node.js",
    "PHP",
    "Python",
    "TypeScript",
    "Tailwind CSS",
    "SASS",
  ]
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Our Website Design Services
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              From simple business websites to complex e-commerce platforms, we
              have the expertise to bring your vision to life with cutting-edge
              technology and design.
            </p>
            <div className="space-y-3">
              {services.map((service, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                  <span className="text-foreground">{service}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-muted/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Technologies We Use</h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-red-500/10 text-red-500 border-red-500/20"
                >
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">
                Ready to get started?
              </h4>
              <p className="text-muted-foreground mb-4">
                Let's discuss your project and create something amazing
                together.
              </p>
              <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
                Get Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
