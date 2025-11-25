"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function QuoteFormSidebar() {
  return (
    <div id="quote-form" className="bg-white p-8 rounded-xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] border-t-[6px] border-primary w-full max-w-md mx-auto md:mx-0 md:max-w-none relative z-30 transition-transform hover:scale-[1.01] duration-300">
      <div className="mb-6 text-center space-y-2">
        <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 uppercase tracking-tight">
          Request an <span className="text-primary">Estimate</span>
        </h3>
        <p className="text-text-secondary text-sm lg:text-base font-medium">
          Schedule your appointment online for quicker assistance.
        </p>
      </div>
      
      <form className="space-y-5">
        <div className="space-y-1">
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <Input
            id="name"
            type="text"
            placeholder="Your Name"
            required
            className="bg-slate-50 border-slate-200 text-base px-4 py-6 h-auto rounded-lg focus-visible:ring-primary focus-visible:border-primary font-medium placeholder:text-slate-400 transition-all duration-200 hover:border-primary/50"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <Input
            id="email"
            type="email"
            placeholder="Email Address"
            required
            className="bg-slate-50 border-slate-200 text-base px-4 py-6 h-auto rounded-lg focus-visible:ring-primary focus-visible:border-primary font-medium placeholder:text-slate-400 transition-all duration-200 hover:border-primary/50"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="phone" className="sr-only">
            Phone
          </label>
          <Input
            id="phone"
            type="tel"
            placeholder="Phone Number"
            required
            className="bg-slate-50 border-slate-200 text-base px-4 py-6 h-auto rounded-lg focus-visible:ring-primary focus-visible:border-primary font-medium placeholder:text-slate-400 transition-all duration-200 hover:border-primary/50"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="notes" className="sr-only">
            Notes
          </label>
          <Textarea
            id="notes"
            placeholder="What services do you need?"
            rows={4}
            className="bg-slate-50 border-slate-200 text-base px-4 py-4 rounded-lg focus-visible:ring-primary focus-visible:border-primary font-medium placeholder:text-slate-400 resize-none transition-all duration-200 hover:border-primary/50"
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-primary hover:bg-primary-dark text-white font-bold rounded-lg uppercase tracking-widest text-base h-auto px-8 py-4 shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 hover:-translate-y-1"
        >
          Send Request
        </Button>
      </form>
    </div>
  );
}