import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "Our experts typically respond within 2 hours. Thank you for choosing SkyExpress Travel!",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary to-ocean text-primary-foreground py-16 md:py-24">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Let's Plan Your Next Adventure</h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
              Get a free, no-obligation consultation from our travel experts.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Form */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                <motion.h2 variants={fadeUp} className="text-2xl font-bold text-foreground mb-6">Send Us a Message</motion.h2>
                <motion.form variants={fadeUp} onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input name="name" placeholder="Your Name" required maxLength={100} />
                    <Input name="email" type="email" placeholder="Email Address" required maxLength={255} />
                  </div>
                  <Input name="phone" type="tel" placeholder="Phone Number" maxLength={20} />
                  <Select name="service">
                    <SelectTrigger>
                      <SelectValue placeholder="Service Interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="airline">Airline Tickets</SelectItem>
                      <SelectItem value="visa">Visa Services</SelectItem>
                      <SelectItem value="tours">Tour Packages</SelectItem>
                      <SelectItem value="sikh-tours">Sikh Tours to Pakistan</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input name="dates" type="text" placeholder="Preferred Travel Dates" maxLength={100} />
                  <Textarea name="message" placeholder="Tell us about your travel plans..." rows={4} maxLength={1000} />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 gold-glow-hover font-bold"
                    size="lg"
                  >
                    {isSubmitting ? "Sending..." : "Get Your Free Quote"}
                  </Button>
                </motion.form>
                <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Our experts typically respond within 2 hours</span>
                </div>
              </motion.div>

              {/* Contact info */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-6">
                <motion.h2 variants={fadeUp} className="text-2xl font-bold text-foreground mb-6">Our Offices</motion.h2>
                {[
                  { city: "Slough", address: "6-8 High Street, Slough SL1 1EE, UK", phone: "01753 531877" },
                  { city: "Leicester", address: "143 Green Lane Road, Leicester LE5 ETQ, UK", phone: "0116 276 3332" },
                ].map((office) => (
                  <motion.div key={office.city} variants={fadeUp}>
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <MapPin className="h-5 w-5 text-primary" />
                          <h3 className="font-bold text-lg text-foreground">{office.city} Office</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-2">{office.address}</p>
                        <a href={`tel:${office.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 text-primary font-semibold text-sm hover:text-accent transition-colors">
                          <Phone className="h-4 w-4" /> {office.phone}
                        </a>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}

                <motion.div variants={fadeUp}>
                  <Card className="bg-primary text-primary-foreground">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Mail className="h-5 w-5 text-accent" />
                        <h3 className="font-bold">Email Us</h3>
                      </div>
                      <a href="mailto:reservations@skyexpresstravel.co.uk" className="text-accent hover:underline text-sm break-all">
                        reservations@skyexpresstravel.co.uk
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeUp} className="flex items-center gap-3 p-4 bg-secondary/10 rounded-lg">
                  <Shield className="h-5 w-5 text-secondary" />
                  <span className="text-sm font-semibold text-foreground">25+ Years Trusted by Thousands</span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
