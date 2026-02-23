import { useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const allTestimonials = [
  { name: "Simran Kaur", location: "Leicester", stars: 5, community: "Sikh", quote: "SkyExpress made our Pakistan gurdwara visit unforgettable. Professional, affordable, and deeply respectful of our faith. The entire group felt safe and cared for throughout." },
  { name: "Harpreet Singh", location: "Slough", stars: 5, community: "Sikh", quote: "The team organized our entire Sikh pilgrimage tour seamlessly. From Nankana Sahib to Panja Sahib, every detail was perfectly planned. We felt taken care of every step." },
  { name: "Gurinder Dhillon", location: "Birmingham", stars: 5, community: "Sikh", quote: "Outstanding service for our group tour to Nankana Sahib. They truly understand Sikh heritage travel and made the experience deeply spiritual and memorable." },
  { name: "Jasvinder Kaur", location: "London", stars: 5, community: "Sikh", quote: "Our family's first pilgrimage to Pakistan was made possible by SkyExpress. Their cultural sensitivity and attention to religious protocols was remarkable." },
  { name: "Patel Family", location: "London", stars: 5, community: "Hindu", quote: "Best visa service I've used. Quick processing, transparent pricing, and the team went above and beyond to help with our family travel arrangements." },
  { name: "Mohammed Ali", location: "London", stars: 5, community: "Muslim", quote: "Affordable flights without compromising quality. SkyExpress is our go-to for every family trip. Their service is consistently excellent." },
  { name: "Rajesh Sharma", location: "Manchester", stars: 5, community: "Hindu", quote: "Excellent tour packages! The Rajasthan trip they planned for us was beyond expectations. Every hotel and experience was top-notch." },
  { name: "Amisha Patel", location: "Leicester", stars: 5, community: "Gujarati", quote: "Raj booked our business trip to India and added a family holiday extension. Seamless service, great deals, and wonderful personal touches." },
];

const communities = ["All", "Sikh", "Hindu", "Muslim", "Gujarati"];

const Testimonials = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? allTestimonials : allTestimonials.filter((t) => t.community === filter);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary to-ocean text-primary-foreground py-16 md:py-24">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Customer Testimonials</h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
              Real stories from our diverse community of satisfied travelers.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {communities.map((c) => (
                <Button
                  key={c}
                  variant={filter === c ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilter(c)}
                  className={filter === c ? "bg-primary" : ""}
                >
                  {c}
                </Button>
              ))}
            </div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((t) => (
                <motion.div key={t.name} variants={fadeUp}>
                  <Card className="h-full hover:-translate-y-1 transition-transform">
                    <CardContent className="p-6">
                      <div className="flex gap-1 mb-3">
                        {Array.from({ length: t.stars }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                        ))}
                      </div>
                      <p className="text-foreground italic mb-4 text-sm leading-relaxed">"{t.quote}"</p>
                      <div>
                        <p className="font-bold text-foreground text-sm">{t.name}</p>
                        <p className="text-muted-foreground text-xs">{t.location}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Testimonials;
