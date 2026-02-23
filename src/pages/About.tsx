import { motion } from "framer-motion";
import { Shield, Users, Globe, MapPin, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary to-ocean text-primary-foreground py-16 md:py-24">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About SkyExpress Travel</h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
              25+ years of trust, expertise, and cultural understanding serving global communities.
            </p>
          </div>
        </section>

        {/* Heritage */}
        <section className="py-16 md:py-24">
          <div className="container max-w-4xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="text-3xl font-bold text-foreground mb-6">Our Heritage</motion.h2>
              <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed mb-4">
                For over 25 years, SkyExpress Travel has been the trusted travel partner for families and communities across the UK and beyond. Founded with a mission to make premium travel accessible and affordable, we've grown from a small office in Slough to serving thousands of satisfied customers from our offices in Slough and Leicester.
              </motion.p>
              <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed">
                Our deep understanding of Sikh, Hindu, Gujarati, Muslim, and other diaspora communities sets us apart. We don't just book travel — we craft culturally sensitive, meaningful experiences that celebrate heritage and create lasting memories.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
              <motion.h2 variants={fadeUp} className="text-3xl font-bold text-foreground mb-3">Our Values</motion.h2>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Shield, title: "Trust", desc: "Transparent pricing and honest guidance in every interaction." },
                { icon: Users, title: "Community", desc: "Deep cultural understanding and respect for diverse traditions." },
                { icon: Globe, title: "Excellence", desc: "Premium service quality at budget-friendly prices." },
                { icon: Award, title: "Expertise", desc: "25+ years of industry knowledge and professional consultants." },
              ].map((v) => (
                <motion.div key={v.title} variants={fadeUp}>
                  <Card className="h-full hover:-translate-y-1 transition-transform">
                    <CardContent className="p-6 text-center">
                      <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                        <v.icon className="h-6 w-6 text-accent" />
                      </div>
                      <h3 className="font-bold text-foreground mb-2">{v.title}</h3>
                      <p className="text-muted-foreground text-sm">{v.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Offices */}
        <section className="py-16 md:py-24">
          <div className="container">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
              <motion.h2 variants={fadeUp} className="text-3xl font-bold text-foreground mb-3">Our Offices</motion.h2>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {[
                { city: "Slough", address: "6-8 High Street, Slough SL1 1EE, UK", phone: "01753 531877" },
                { city: "Leicester", address: "143 Green Lane Road, Leicester LE5 ETQ, UK", phone: "0116 276 3332" },
              ].map((office) => (
                <motion.div key={office.city} variants={fadeUp}>
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <MapPin className="h-5 w-5 text-primary" />
                        <h3 className="font-bold text-lg text-foreground">{office.city} Office</h3>
                      </div>
                      <p className="text-muted-foreground text-sm mb-1">{office.address}</p>
                      <a href={`tel:${office.phone.replace(/\s/g, "")}`} className="text-primary font-semibold text-sm hover:text-accent transition-colors">
                        {office.phone}
                      </a>
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

export default About;
