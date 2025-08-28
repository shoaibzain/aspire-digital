
export default function Process() {
  return (
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Design Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              A proven methodology that ensures your project is delivered on time and exceeds expectations
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We learn about your business, goals, and target audience",
              },
              {
                step: "02",
                title: "Design",
                description: "Create wireframes and visual designs that align with your brand",
              },
              {
                step: "03",
                title: "Development",
                description: "Build your website using modern technologies and best practices",
              },
              {
                step: "04",
                title: "Launch",
                description: "Deploy your website and provide ongoing support and maintenance",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-red-500 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-pretty">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
}
