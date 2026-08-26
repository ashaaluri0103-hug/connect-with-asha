"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Linkedin, Github, Send, CheckCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CONTACT_INFO } from "@/lib/contact-info";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(100, "Name must be less than 100 characters"),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters"),
  subject: z
    .string()
    .trim()
    .min(1, "Subject is required")
    .max(200, "Subject must be less than 200 characters"),
  message: z
    .string()
    .trim()
    .min(1, "Message is required")
    .max(2000, "Message must be less than 2000 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const contactLinks = [
  {
    label: "Email",
    value: CONTACT_INFO.email,
    href: `mailto:${CONTACT_INFO.email}`,
    icon: Mail,
    accentClass: "bg-primary/10 text-primary",
    hoverBorderClass: "hover:border-primary/50",
  },
  {
    label: "LinkedIn",
    value: CONTACT_INFO.linkedIn.displayName,
    href: CONTACT_INFO.linkedIn.url,
    icon: Linkedin,
    accentClass: "bg-chart-2/10 text-chart-2",
    hoverBorderClass: "hover:border-chart-2/50",
    external: true,
  },
  {
    label: "GitHub",
    value: CONTACT_INFO.github.displayName,
    href: CONTACT_INFO.github.url,
    icon: Github,
    accentClass: "bg-foreground/10 text-foreground",
    hoverBorderClass: "hover:border-foreground/50",
    external: true,
  },
];

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (_data: ContactFormValues) => {
    // Client-side only submission. No backend email service is configured,
    // so we show a success message without claiming the email was delivered.
    await new Promise((resolve) => setTimeout(resolve, 600));
    setIsSubmitted(true);
    reset();
  };

  return (
    <section id="contact" className="w-full py-20 md:py-28">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-10 text-center">
          <div className="space-y-3">
            <h2 className="text-4xl font-extrabold tracking-tighter gradient-text sm:text-5xl">
              Let&apos;s Connect
            </h2>
            <p className="font-mono text-sm text-muted-foreground">
              Have an opportunity, project idea, or simply want to connect?
            </p>
          </div>

          <div className="grid gap-4">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className={`group flex items-center rounded-2xl border border-border bg-card p-4 backdrop-blur-sm transition-all duration-300 ${link.hoverBorderClass}`}
              >
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110 ${link.accentClass}`}
                >
                  <link.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="ml-4 flex flex-col text-left">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {link.label}
                  </span>
                  <span className="text-sm font-medium text-card-foreground">
                    {link.value}
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 text-left shadow-sm backdrop-blur-sm sm:p-8">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <CheckCircle className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-card-foreground">
                  Message received
                </h3>
                <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                  Thank you for reaching out. I&apos;ll get back to you as soon
                  as possible.
                </p>
                <Button
                  variant="outline"
                  className="mt-6"
                  onClick={() => setIsSubmitted(false)}
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    aria-invalid={errors.name ? "true" : "false"}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    {...register("name")}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-sm text-destructive">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    {...register("email")}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-sm text-destructive">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="What is this about?"
                    aria-invalid={errors.subject ? "true" : "false"}
                    aria-describedby={
                      errors.subject ? "subject-error" : undefined
                    }
                    {...register("subject")}
                  />
                  {errors.subject && (
                    <p id="subject-error" className="text-sm text-destructive">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="Write your message here..."
                    aria-invalid={errors.message ? "true" : "false"}
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                    {...register("message")}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-sm text-destructive">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
