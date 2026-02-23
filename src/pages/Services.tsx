import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Plane, FileText, Globe, Landmark, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

const services = [
  {
    icon: Plane,
    title: "Airline Tickets",
    desc: "We search across hundreds of airlines to find you the best fares worldwide. Whether you're flying economy, business, or first class, our experts negotiate exclusive deals you won't find elsewhere.",
    features: ["Worldwide destinations", "All cabin classes", "Group booking discounts", "Flexible rebooking options", "24/7 booking support"],
  },
  {
    icon: FileText,
    title: "Visa Services",
    desc: "Our visa experts guide you through the entire application process with high success rates. We handle documentation, appointment scheduling, and follow-ups so you can travel stress-free.",
    features: ["Tourist & business visas", "Document preparation", "Application tracking", "Interview guidance", "Express processing available"],
  },
  {
    icon: Globe,
    title: "Tour Packages",
    desc: "Explore the world with our curated tour packages designed for families, couples, and groups. From cultural heritage tours to beach getaways, we create unforgettable travel experiences.",
    features: ["Family holidays", "Honeymoon packages", "Group tours", "Adventure trips", "Custom itineraries"],
  },
  {
    icon: Landmark,
    title: "Sikh Tours to Pakistan",
    badge: "Coming Soon",
    desc: "Experience sacred pilgrimages to historic gurdwaras in Pakistan. Our culturally sensitive itineraries include visits to Nankana Sahib, Panja Sahib, and other significant Sikh heritage sites.",
    features: ["Nankana Sahib visits", "Panja Sahib pilgrimage", "Kartarpur Corridor", "Historical site tours", "Cultural immersion activities"],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary to-ocean text-primary-foreground py-16 md:py-24">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
              Comprehensive travel solutions backed by 25+ years of expertise and cultural understanding.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container space-y-16">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <motion.div variants={fadeUp} className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <svc.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">{svc.title}</h2>
                    {svc.badge && <Badge className="bg-saffron text-accent-foreground">{svc.badge}</Badge>}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{svc.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                        <CheckCircle className="h-4 w-4 text-secondary shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button className="bg-accent text-accent-foreground hover:bg-accent/90 gold-glow-hover font-semibold">
                      Get a Quote
                    </Button>
                  </Link>
                </motion.div>
                <motion.div variants={fadeUp} className="flex-1 w-full">
                  <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/5 to-accent/10 flex items-center justify-center">
                    <svc.icon className="h-20 w-20 text-primary/20" />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
