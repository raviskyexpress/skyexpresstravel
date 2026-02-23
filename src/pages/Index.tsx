import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Plane, FileText, Globe, Star, Shield, DollarSign, Target,
  ClipboardList, MessageCircle, Receipt, CheckCircle,
  MapPin, ShoppingBag, Landmark, Heart, ChevronLeft, ChevronRight,
  Phone, Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useState, useEffect } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

/* ─── Testimonials Data ─── */
const testimonials = [
  { name: "Simran Kaur", location: "Leicester", stars: 5, quote: "SkyExpress made our Pakistan gurdwara visit unforgettable. Professional, affordable, and deeply respectful of our faith." },
  { name: "Harpreet Singh", location: "Slough", stars: 5, quote: "The team organized our entire Sikh pilgrimage tour seamlessly. We felt taken care of every step of the way." },
  { name: "Gurinder Dhillon", location: "Birmingham", stars: 5, quote: "Outstanding service for our group tour to Nankana Sahib. They truly understand Sikh heritage travel." },
  { name: "Patel Family", location: "London", stars: 5, quote: "Best visa service I've used. Quick processing and transparent pricing. Highly recommend to everyone!" },
  { name: "Mohammed Ali", location: "London", stars: 5, quote: "Affordable flights without compromising quality. SkyExpress is our go-to for every family trip." },
  { name: "Rajesh Sharma", location: "Manchester", stars: 5, quote: "Excellent tour packages! The Rajasthan trip they planned for us was beyond expectations." },
];

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* ─── HERO ─── */}
        <section className="relative bg-gradient-to-br from-primary via-primary to-ocean text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1920')] bg-cover bg-center opacity-15" />
          <div className="container relative py-20 md:py-32 text-center">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                SkyExpress Travel
              </motion.h1>
              <motion.p variants={fadeUp} className="text-xl md:text-2xl mb-2 text-accent font-semibold">
                Where Dreams Take Flight
              </motion.p>
              <motion.p variants={fadeUp} className="text-base md:text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Trusted by thousands for 25+ years — premium service, unbeatable prices, and personalized travel planning for global communities.
              </motion.p>
              <motion.div variants={fadeUp}>
                <Link to="/services">
                  <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gold-glow-hover text-base font-bold px-8">
                    Explore Services
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap justify-center gap-6 mt-12"
            >
              {[
                { icon: Shield, label: "25+ Years Experience" },
                { icon: Star, label: "4.8★ Customer Rating" },
                { icon: DollarSign, label: "100% Transparent Pricing" },
              ].map((b) => (
                <div key={b.label} className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur rounded-full px-4 py-2 text-sm">
                  <b.icon className="h-4 w-4 text-accent" />
                  <span>{b.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ─── WHY CHOOSE US ─── */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground mb-3">Why Choose SkyExpress</motion.h2>
              <motion.p variants={fadeUp} className="text-muted-foreground max-w-xl mx-auto">Trusted expertise, exceptional value, and personalized service for every journey.</motion.p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-3 gap-8">
              {[
                { icon: DollarSign, title: "Unbeatable Pricing", desc: "Exclusive deals and competitive rates with a price-match guarantee. No hidden fees, ever." },
                { icon: Star, title: "Premium Quality", desc: "25 years of expertise with professional consultants delivering personalized, white-glove service." },
                { icon: Target, title: "Cultural Expertise", desc: "Specialists in Sikh tours, pilgrimage travel, and culturally sensitive itineraries worldwide." },
              ].map((item) => (
                <motion.div key={item.title} variants={fadeUp}>
                  <Card className="border-2 border-transparent hover:border-accent/40 transition-all duration-300 hover:-translate-y-1 h-full">
                    <CardContent className="p-8 text-center">
                      <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                        <item.icon className="h-7 w-7 text-accent" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ─── SERVICES ─── */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground mb-3">Our Services</motion.h2>
              <motion.p variants={fadeUp} className="text-muted-foreground max-w-xl mx-auto">Comprehensive travel solutions tailored to your needs.</motion.p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Plane, title: "Airline Tickets", desc: "Best prices on flights worldwide. Economy to first class, we find you the perfect deal.", badge: null },
                { icon: FileText, title: "Visa Services", desc: "Expert visa consultation and processing for all destinations with high success rates.", badge: null },
                { icon: Globe, title: "Tour Packages", desc: "Curated tour packages across the globe — family holidays, honeymoons, and group tours.", badge: null },
                { icon: Landmark, title: "Sikh Tours to Pakistan", desc: "Sacred pilgrimage experiences to historic gurdwaras with culturally immersive itineraries.", badge: "Coming Soon" },
              ].map((svc) => (
                <motion.div key={svc.title} variants={fadeUp}>
                  <Link to="/services">
                    <Card className="group hover:-translate-y-2 transition-all duration-300 hover:shadow-lg cursor-pointer h-full relative overflow-hidden">
                      {svc.badge && (
                        <Badge className="absolute top-3 right-3 bg-saffron text-accent-foreground">{svc.badge}</Badge>
                      )}
                      <CardContent className="p-6 text-center">
                        <div className="mx-auto mb-4 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <svc.icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-bold text-lg mb-2 text-foreground">{svc.title}</h3>
                        <p className="text-muted-foreground text-sm">{svc.desc}</p>
                        <span className="inline-block mt-3 text-primary text-sm font-semibold group-hover:underline">Learn More →</span>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ─── SIKH TOURS FEATURED ─── */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-saffron/10 via-accent/5 to-saffron/10">
          <div className="container">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-4xl mx-auto text-center">
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Sikh Tours to Pakistan
              </motion.h2>
              <motion.p variants={fadeUp} className="text-muted-foreground mb-10 max-w-2xl mx-auto">
                Experience sacred pilgrimages to historic gurdwaras with culturally immersive, respectful, and unforgettable itineraries.
              </motion.p>
              <motion.div variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                {[
                  { icon: Landmark, label: "Gurdwara Visits" },
                  { icon: MapPin, label: "Historical Tours" },
                  { icon: ShoppingBag, label: "Shopping Experiences" },
                  { icon: Heart, label: "Cultural Immersion" },
                ].map((item) => (
                  <motion.div key={item.label} variants={fadeUp} className="flex flex-col items-center gap-3 p-6 rounded-xl bg-background shadow-sm">
                    <item.icon className="h-8 w-8 text-saffron" />
                    <span className="font-semibold text-foreground">{item.label}</span>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div variants={fadeUp}>
                <Link to="/contact">
                  <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gold-glow-hover font-bold px-8">
                    Get Your Sikh Tour Package
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ─── TESTIMONIALS ─── */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground mb-3">What Our Customers Say</motion.h2>
              <motion.p variants={fadeUp} className="text-muted-foreground max-w-xl mx-auto">Real stories from real travelers.</motion.p>
            </motion.div>

            <div className="relative max-w-2xl mx-auto">
              <Card className="border-accent/20">
                <CardContent className="p-8 text-center min-h-[200px] flex flex-col items-center justify-center">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonials[currentTestimonial].stars }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-foreground text-lg italic mb-4">"{testimonials[currentTestimonial].quote}"</p>
                  <p className="font-bold text-foreground">{testimonials[currentTestimonial].name}</p>
                  <p className="text-muted-foreground text-sm">{testimonials[currentTestimonial].location}</p>
                </CardContent>
              </Card>
              <div className="flex items-center justify-center gap-4 mt-6">
                <button
                  onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                  className="p-2 rounded-full bg-muted hover:bg-accent/20 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentTestimonial(i)}
                      className={`w-2 h-2 rounded-full transition-colors ${i === currentTestimonial ? "bg-accent" : "bg-muted-foreground/30"}`}
                      aria-label={`Go to testimonial ${i + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                  className="p-2 rounded-full bg-muted hover:bg-accent/20 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ─── HOW WE WORK ─── */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground mb-3">How We Work</motion.h2>
              <motion.p variants={fadeUp} className="text-muted-foreground">Simple, transparent, and hassle-free.</motion.p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { icon: ClipboardList, step: "01", title: "Explore Services", desc: "Browse our travel offerings" },
                { icon: MessageCircle, step: "02", title: "Connect With Expert", desc: "Get personalized consultation" },
                { icon: Receipt, step: "03", title: "Get Best Quote", desc: "Transparent pricing, no surprises" },
                { icon: CheckCircle, step: "04", title: "Book & Travel", desc: "Seamless booking experience" },
              ].map((s) => (
                <motion.div key={s.step} variants={fadeUp} className="text-center">
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center relative">
                    <s.icon className="h-7 w-7 text-primary" />
                    <span className="absolute -top-1 -right-1 w-6 h-6 bg-accent text-accent-foreground text-xs font-bold rounded-full flex items-center justify-center">
                      {s.step}
                    </span>
                  </div>
                  <h3 className="font-bold text-foreground mb-1">{s.title}</h3>
                  <p className="text-muted-foreground text-sm">{s.desc}</p>
                </motion.div>
              ))}
            </motion.div>
            <p className="text-center mt-8 text-sm font-semibold text-primary">No Hidden Costs • Expert Guidance • Best Value Guaranteed</p>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-4">Ready to Book Your Dream Journey?</motion.h2>
              <motion.p variants={fadeUp} className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
                Let our 25+ year experts find you the best deals. Get a free, no-obligation quote today.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <Link to="/contact">
                  <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gold-glow-hover font-bold px-8">
                    Get Your Free Quote
                  </Button>
                </Link>
              </motion.div>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-primary-foreground/80">
                <a href="tel:01162763332" className="flex items-center gap-2 hover:text-accent transition-colors">
                  <Phone className="h-4 w-4" /> 0116 276 3332
                </a>
                <a href="tel:01753531877" className="flex items-center gap-2 hover:text-accent transition-colors">
                  <Phone className="h-4 w-4" /> 01753 531877
                </a>
                <a href="mailto:reservations@skyexpresstravel.co.uk" className="flex items-center gap-2 hover:text-accent transition-colors">
                  <Mail className="h-4 w-4" /> reservations@skyexpresstravel.co.uk
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
