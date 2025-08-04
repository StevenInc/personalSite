import { motion } from "framer-motion";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSubmissionSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Globe, MapPin, Send } from "lucide-react";
import type { InsertContactSubmission } from "@shared/schema";
import contactImage from "@assets/contact-communication-image.jpg";

export default function ContactSection() {
  const { toast } = useToast();
  
  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Message Sent!",
        description: data.message,
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactSubmission) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "me@stevenbenjamin.com",
      href: "mailto:me@stevenbenjamin.com",
      color: "var(--portfolio-accent)"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "(415) 324-9035",
      subtitle: "Text before calling",
      href: "tel:4153249035",
      color: "var(--portfolio-success)"
    },
    {
      icon: Globe,
      title: "Portfolio",
      value: "www.stevenbenjamin.com",
      href: "http://www.stevenbenjamin.com",
      color: "var(--portfolio-warning)"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Las Vegas, NV / Remote",
      href: null,
      color: "var(--portfolio-purple)"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-[var(--portfolio-darker)]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Get In</span> Touch
          </h2>
          <p className="text-xl text-[var(--portfolio-text-muted)] max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can build something amazing together.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <img 
                src={contactImage} 
                alt="Dog with tin can phone representing clear communication and connection" 
                className="w-full aspect-square object-cover rounded-2xl shadow-xl" 
              />
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Contact Information</h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div 
                    key={info.title}
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${info.color}20` }}
                    >
                      <info.icon className="text-xl" style={{ color: info.color }} />
                    </div>
                    <div>
                      <div className="font-semibold">{info.title}</div>
                      {info.href ? (
                        <a 
                          href={info.href} 
                          target={info.href.startsWith('http') ? '_blank' : undefined}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="hover:opacity-80 transition-opacity"
                          style={{ color: info.color }}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-slate-300">{info.value}</div>
                      )}
                      {info.subtitle && (
                        <div className="text-sm text-[var(--portfolio-text-muted)]">{info.subtitle}</div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="bg-slate-800 rounded-xl p-8 shadow-xl"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your name" 
                          {...field} 
                          className="bg-[var(--portfolio-darker)] border-slate-600 focus:border-[var(--portfolio-accent)]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input 
                          type="email"
                          placeholder="your.email@example.com" 
                          {...field} 
                          className="bg-[var(--portfolio-darker)] border-slate-600 focus:border-[var(--portfolio-accent)]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Project inquiry, collaboration, etc." 
                          {...field} 
                          className="bg-[var(--portfolio-darker)] border-slate-600 focus:border-[var(--portfolio-accent)]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell me about your project or what you'd like to discuss..."
                          rows={6}
                          {...field} 
                          className="bg-[var(--portfolio-darker)] border-slate-600 focus:border-[var(--portfolio-accent)] resize-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-[var(--portfolio-accent)] hover:bg-blue-600 text-white font-semibold py-3"
                  disabled={contactMutation.isPending}
                >
                  {contactMutation.isPending ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
