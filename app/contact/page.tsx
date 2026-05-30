"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { tc } from "@/lib/theme-classes";
import { cn } from "@/lib/utils";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main className="relative flex-1 pt-32 pb-20">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          <h1 className={cn("text-4xl", tc.headingLg)}>Contact EngiWeb</h1>
          <p className={cn("mt-4", tc.body)}>
            Tell us about your project. We&apos;ll respond within 1–2 business
            days.
          </p>

          {submitted ? (
            <div className="surface-card mt-12 border-accent/20 bg-accent/5 p-8 text-center">
              <p className={cn("text-xl font-semibold", tc.heading)}>
                Message received!
              </p>
              <p className={cn("mt-2 text-sm", tc.body)}>
                Form is static for now — backend integration coming next.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="surface-card mt-12 space-y-5 p-8"
            >
              <div>
                <label
                  htmlFor="name"
                  className={cn("mb-1.5 block text-sm", tc.body)}
                >
                  Name
                </label>
                <input id="name" required className={tc.input} />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className={cn("mb-1.5 block text-sm", tc.body)}
                >
                  Email
                </label>
                <input id="email" type="email" required className={tc.input} />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className={cn("mb-1.5 block text-sm", tc.body)}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className={cn(tc.input, "resize-none")}
                />
              </div>
              <button
                type="submit"
                className={cn(tc.btnPrimary, "w-full py-3")}
              >
                Send Message <Send className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
